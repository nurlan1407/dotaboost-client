import React, { FC } from 'react'
import cls from './link.module.scss'


interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
   href?: string
   className? :string
}

const Link: FC<LinkProps> = (props) => {
    const {href, children} = props
    return(
        <a href={href} className={cls.link}>
            {children}
        </a>
    )
}

export default Link;