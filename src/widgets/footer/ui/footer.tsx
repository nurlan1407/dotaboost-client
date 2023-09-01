import React from "react"
import cls from './footer.module.scss'
import Link from "shared/ui/link/link";

export const Footer:React.FC=()=>{
    return(
        <div className={cls.footer}>
            <Link href={"termsofuse"}>Terms of use</Link>
            <Link href={"contacts"}>Contacts</Link>
            <Link href={""}>DotaBoost</Link>
        </div>
    )
}

