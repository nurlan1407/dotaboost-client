import Spinner from 'shared/ui/spinner/spinner'
import cls from './loading.module.scss'
import React from 'react'


export const LoadingSpinner: React.FC = () => {
    return (
        <div className={cls.container}>
            <Spinner/>
        </div>
    )
}