import React, { useEffect, useState } from "react";
import { usePermission } from "@/hooks/usePermission";
import { useSelector } from "react-redux";
import { Box, Modal, Typography, IconButton, InputBase, Paper, Tabs, Tab } from "@mui/material";
import Button from "@/extra/Button";
import { closeDialog } from "@/store/dialogSlice";
import { RootStore, useAppDispatch } from "@/store/store";

import { getAllLanguages, updateLanguageTranslations, getLanguageTranslations } from "@/store/languageSlice";
import { IconPencil, IconSearch } from "@tabler/icons-react";

const style: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    maxHeight: "90vh",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid #C9C9C9",
    boxShadow: "24px",
    display: "flex",
    flexDirection: "column",
};

const TranslationInfoDialogue = () => {
    const dispatch = useAppDispatch();
    const { can } = usePermission();
    const canEdit = can("Language", "Edit");

    const { dialogue, dialogueData } = useSelector((state: RootStore) => state.dialogue);
    const { translations, isLoading } = useSelector((state: RootStore) => state.language);

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("app");
    const [localTranslations, setLocalTranslations] = useState<{ [module: string]: { [key: string]: string } }>({
        app: {},
        web: {}
    });

    useEffect(() => {
        setOpen(dialogue);
    }, [dialogue]);

    useEffect(() => {
        if (translations && typeof translations === 'object' && !Array.isArray(translations)) {
            setLocalTranslations((prev) => ({
                ...prev,
                [translations.module]: {
                    ...prev[translations.module],
                    ...(translations.translations || {})
                }
            }));
        } else if (Array.isArray(translations)) {
            const newLocalTranslations: { [module: string]: { [key: string]: string } } = {
                app: {},
                web: {}
            };
            translations.forEach((item: any) => {
                newLocalTranslations[item.module] = item.translations || {};
            });
            setLocalTranslations(newLocalTranslations);
        }
    }, [translations]);

    useEffect(() => {
        if (open && dialogueData?.languageCode) {
            const timer = setTimeout(() => {
                dispatch(getLanguageTranslations({
                    languageCode: dialogueData.languageCode,
                    module: activeTab,
                    search: search.trim() || undefined
                }));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [open, activeTab, search, dialogueData?.languageCode, dispatch]);

    const handleClose = () => {
        setOpen(false);
        dispatch(closeDialog());
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    const handleValueChange = (key: string, value: string) => {
        setLocalTranslations((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [key]: value
            }
        }));
    };

    const handleBulkUpdate = () => {
        // Get original translations for the active module
        const originalModuleData = Array.isArray(translations)
            ? translations.find((item: any) => item.module === activeTab)?.translations || {}
            : (translations && translations.module === activeTab ? translations.translations : {});

        // Filter only changed translations for the active module
        const changedTranslations: { [key: string]: string } = {};
        const currentModuleTranslations = localTranslations[activeTab] || {};

        Object.keys(currentModuleTranslations).forEach((key) => {
            if (currentModuleTranslations[key] !== originalModuleData[key]) {
                changedTranslations[key] = currentModuleTranslations[key];
            }
        });

        if (Object.keys(changedTranslations).length === 0) {
            return handleClose();
        }

        const payload = {
            languageCode: dialogueData.languageCode,
            translations: changedTranslations,
            module: activeTab, // Added module to payload
        };

        dispatch(updateLanguageTranslations(payload)).unwrap().then(() => {
            dispatch(getAllLanguages({ start: dialogueData?.page || 1, limit: dialogueData?.size || 10 }));
            handleClose();
        });
    };

    const currentTranslations = localTranslations[activeTab] || {};
    const filteredKeys = Object.keys(currentTranslations).filter((key) =>
        key.toLowerCase().includes(search.toLowerCase()) ||
        currentTranslations[key]?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="translation-info-modal-title"
        >
            <Box sx={style}>
                <div className="model-header d-flex justify-content-between align-items-center">
                    <p className="m-0">Translations: {dialogueData?.languageTitle} ({dialogueData?.languageCode})</p>
                </div>

                <div className="model-body p-0">
                    <div className="px-3 pt-3 bg-white border-bottom">
                        <Tabs
                            value={activeTab}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            sx={{
                                minHeight: "40px",
                                "& .MuiTab-root": {
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    minHeight: "40px",
                                },
                            }}
                        >
                            <Tab label="App" value="app" />
                            <Tab label="Web" value="web" />
                        </Tabs>

                        <div className="input-group my-3">
                            <span className="input-group-text bg-transparent border-end-0">
                                <IconSearch size={18} className="text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 ps-0"
                                placeholder={`Search ${activeTab} translation keys or values...`}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ boxShadow: "none" }}
                            />
                        </div>
                    </div>

                    <div style={{ maxHeight: "55vh", overflowY: "auto" }}>
                        <table className="table table-borderless table-striped mb-0">
                            <thead className="sticky-top bg-light" style={{ zIndex: 1 }}>
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: "35%", fontSize: "13px", textTransform: "uppercase" }}>Key</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: "65%", fontSize: "13px", textTransform: "uppercase" }}>Translation Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading && filteredKeys.length === 0 ? (
                                    <tr>
                                        <td colSpan={2} className="text-center py-5">
                                            <div className="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
                                            Loading translations...
                                        </td>
                                    </tr>
                                ) : filteredKeys.length === 0 ? (
                                    <tr>
                                        <td colSpan={2} className="text-center py-5 text-muted">No translations matches your search.</td>
                                    </tr>
                                ) : (
                                    filteredKeys.map((key) => (
                                        <tr key={key} className="border-bottom">
                                            <td className="ps-4 align-middle">
                                                <span className="badge bg-light text-dark fw-medium" style={{ fontSize: "13px" }}>{key}</span>
                                            </td>

                                            <td className="align-middle pe-4">
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-sm translation-input ${!currentTranslations[key]?.trim() ? "border-danger" : ""}`}
                                                        value={currentTranslations[key] || ""}
                                                        placeholder="Enter translation..."
                                                        onChange={(e) => handleValueChange(key, e.target.value)}
                                                    />
                                                    {!currentTranslations[key]?.trim() && (
                                                        <small className="text-danger" style={{ fontSize: "10px" }}>Field is empty</small>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="model-footer p-3 border-top">
                    <div className="d-flex justify-content-end gap-2">
                        <Button
                            onClick={handleClose}
                            btnName="Cancel"
                            newClass="close-model-btn"
                        />
                        {canEdit && (
                            <Button
                                onClick={handleBulkUpdate}
                                btnName="Submit"
                                type="button"
                                newClass="submit-btn"
                            />
                        )}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default TranslationInfoDialogue;
