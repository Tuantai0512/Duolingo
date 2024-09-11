import Link from "next/link";

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <footer className='bg-[#58cc02] flex flex-col items-center'>
            <div className="grid gap-[24px] lg:grid-cols-5 max-w-[988px] pb-[64px] mx-[15px]">
                <div className="grid content-start gap-[32px]">
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">About us</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Courses</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Mission</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Approach</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Efficacy</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Team</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Research</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Careers</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Brand guidelines</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Store</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Press</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Investors</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid content-start gap-[32px]">
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">Products</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo for Schools</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo English Test</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo ABC</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo Math</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Podcast</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo for Business</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Super Duolingo</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Gift Super Duolingo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid content-start gap-[32px]">
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">Apps</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo for Android</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo for iOS</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo ABC (iOS)</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid content-start gap-[32px]">
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">Help and support</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo FAQs</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Schools FAQs</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Duolingo English Test FAQs</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Status</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid content-start gap-[32px]">
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">Privacy and terms</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Community guidelines</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Terms</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Privacy</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Respecting your "do not sell my personal information" rights</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-[#d7ffb8] font-bold mb-[12px]">Privacy and terms</div>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Blog</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Instagram</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Facebook</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Twitter</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-[#a5ed6e] font-bold leading-[22px] text-[14px]">Youtube</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-t-2  border-[#a5ed6e] w-full"/>
            <div className="max-w-[988px] pt-[40px] pb-[64px] mx-[15px]">
                <div className="text-[#d7ffb8] font-bold text-[14px] leading-[22px] mb-[16px]">Site language:</div>
                <ul className="mx-[-12px] my-[-8px] flex flex-wrap">
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">العربية</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">اবাংলা</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">اČeština</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">اDeutsch</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">اΕλληνικά</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">English</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Español</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Français</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">हिंदी</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Magyar</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Bahasa Indonesia</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Italiano</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">日本語</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">한국어</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Nederlands</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Polski</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Português</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Română</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Русский</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">తెలుగు</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">ภาษาไทย</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Tagalog</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Türkçe</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Українською</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">Tiếng Việt</Link>
                    </li>
                    <li className="mx-[12px] my-[8px]">
                        <Link href={"/"} className="text-[#a5ed6e] text-[13px] leading-[16px] font-bold">中文</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
