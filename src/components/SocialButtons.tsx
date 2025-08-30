import { GITHUB_CONFIG } from "@/config/github";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const SocialButtons = () => {
    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: GITHUB_CONFIG.USER_PROFILE_URL,
            color: "hover:text-gray-900",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/lucassens",
            color: "hover:text-blue-600",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            href: "https://wa.me/5513982201751",
            color: "hover:text-green-600",
        }
    ];

    return socialLinks.map((social) => (
        <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-card rounded-full card-shadow hover:card-shadow-hover transition-smooth ${social.color} group`}
            title={social.label}
        >
            <social.icon className="w-5 h-5 group-hover:scale-110 transition-smooth" />
        </a>
    ))
}

export default SocialButtons;
