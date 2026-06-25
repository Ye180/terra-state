import { ArrowUpRight } from "lucide-react";

import { FOOTER_CONTACT, FOOTER_LEGAL, FOOTER_NAV, FOOTER_SOCIALS } from "@/components/constants";
import Logo from "@/components/shared/logo";
import { SOCIAL_ICONS } from "./socials";

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container-footer">
                <div className="footer-top">
                    <div className="footer-intro">
                        <Logo />
                        <h2>Discutons-en !</h2>
                        <button type="button" className="book-call">
                            Reservez un rendez-vous
                            <ArrowUpRight className="size-4" />
                        </button>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-col">
                            <h5>Contactez-nous</h5>
                            <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`}>
                                {FOOTER_CONTACT.phone}
                            </a>
                        </div>

                        <div className="footer-col">
                            <h5>Email</h5>
                            <a href={`mailto:${FOOTER_CONTACT.email}`}>{FOOTER_CONTACT.email}</a>
                        </div>

                        <div className="footer-col">
                            <h5>Addresses</h5>
                            {FOOTER_CONTACT.address.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </div>

                        <div className="footer-col">
                            <h5>Légale</h5>
                            {FOOTER_LEGAL.map((item) => (
                                <a key={item.href} href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>©2026 Terra. Tous droits réservés</p>

                    <nav className="footer-links">
                        {FOOTER_NAV.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="footer-socials">
                        {FOOTER_SOCIALS.map((social) => {
                            const Icon = SOCIAL_ICONS[social.label];
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    {Icon ? <Icon className="size-4" /> : null}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
