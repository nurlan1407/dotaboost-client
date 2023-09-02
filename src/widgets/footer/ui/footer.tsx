import React from "react"
import cls from './footer.module.scss'
import Link from "shared/ui/link/link";

export const Footer:React.FC=()=>{
    return(
        <div className={cls.footer}>
            <Link href={"termsofuse"} className={cls.footerLink}>Terms of use</Link>
            <Link href={"contacts"} className={cls.footerLink}>Contacts</Link>
            <Link href={""} className={cls.footerLink}>DotaBoost</Link>
        </div>
    )
}

