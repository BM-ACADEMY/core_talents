import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import Logo from "@/assets/images/logo.png";

const Whatsappfloating = () => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 999999, // 👈 Ensures WhatsApp button stays on top of everything
      }}
    >
      <FloatingWhatsApp
        phoneNumber="+919944509441" // ✅ your WhatsApp number
        accountName="Core Talents"
        avatar={Logo}
        statusMessage="online"
        chatMessage="Hey! Describe your question, I'll respond ASAP..."
        allowEsc
        allowClickAway
        // notification
        notificationSound
      />
    </div>
  );
};

export default Whatsappfloating;
