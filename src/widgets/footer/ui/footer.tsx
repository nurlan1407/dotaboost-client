import React from "react"
import cls from './footer.module.scss'
import Link from "shared/ui/link/link";
import {useLocation} from "react-router-dom";

const withoutFooterRoutes = ["/payment"];

export const Footer:React.FC=()=>{
    const {pathname} = useLocation()
    if(withoutFooterRoutes.some((item)=>pathname.includes(item))) return <></>

    return(
        <>
            <hr className='divider'/>
            <div className={cls.footer}>
                <Link href={"termsofuse"} className={cls.footerLink}>Terms of use</Link>
                <Link href={"contacts"} className={cls.footerLink}>Contacts</Link>
                <Link href={""} className={cls.footerLink}>DotaBoost</Link>
            </div>
        </>

    )
}

