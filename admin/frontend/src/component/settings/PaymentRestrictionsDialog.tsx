"use client";

import React from "react";
import { Modal, Box, Divider } from "@mui/material";
import { Lock, X, MessageSquare, ExternalLink } from "lucide-react";
import Button from "@/extra/Button";

const style: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    backgroundColor: "background.paper",
    borderRadius: "12px",
    border: "1px solid #C9C9C9",
    boxShadow: "24px",
    padding: "0px",
    overflow: "hidden"
};

interface PaymentRestrictionsDialogProps {
    open: boolean;
    onClose: () => void;
}

const PaymentRestrictionsDialog: React.FC<PaymentRestrictionsDialogProps> = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="payment-restrictions-modal-title"
        >
            <Box sx={style}>
                <div className="model-header d-flex justify-content-between align-items-center">
                    <p className="m-0">Access to Payment Settings</p>
                    <X 
                        size={20} 
                        style={{ cursor: "pointer", color: "#666" }} 
                        onClick={onClose} 
                    />
                </div>
                
                <div className="model-body text-center p-4">
                    <div 
                        className="mx-auto mb-4 d-flex align-items-center justify-content-center" 
                        style={{ 
                            width: "60px", 
                            height: "60px", 
                            backgroundColor: "rgba(108, 92, 231, 0.1)", 
                            borderRadius: "50%",
                            color: "#6c5ce7"
                        }}
                    >
                        <Lock size={30} />
                    </div>
                    
                    <h4 className="mb-3" style={{ fontWeight: 600 }}>Extended License Required</h4>
                    
                    <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                        If you want to charge end users by any way, you are required to purchase an Extended License as per CodeCanyon/Envato policy.
                    </p>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <p className="mb-4" style={{ fontSize: "14px" }}>
                        Contact us to upgrade license
                    </p>
                    
                    <div className="d-flex flex-column gap-3 align-items-center mt-2">
                        <Button 
                            onClick={() => window.open('https://wa.me/+919909515320', '_blank')}
                            btnIcon={<MessageSquare size={18} />}
                            btnName="+91 9909515320"
                            style={{ 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                gap: "10px",
                                padding: "10px 30px",
                                borderRadius: "30px",
                                backgroundColor: "#6c5ce7",
                                color: "#fff",
                                border: "none",
                                fontWeight: 500,
                                margin: "0 auto"
                            }}
                        />
                        
                        <a 
                            href="https://codecanyon.net/licenses/faq#main-differences-licenses-a" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="d-flex align-items-center gap-2 mt-3"
                            style={{ 
                                color: "#6c5ce7", 
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600 
                            }}
                        >
                            View Envato License Policy
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
                
                <div className="model-footer py-2 px-3 d-flex justify-content-center">
                    {/* The footer in this specific dialog is minimal based on the reference */}
                </div>
            </Box>
        </Modal>
    );
};

export default PaymentRestrictionsDialog;
