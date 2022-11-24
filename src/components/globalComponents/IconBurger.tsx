interface PropsIconBurger {
    width: string | number,
    height: string | number,
    fill?: string
}

export const IconBurger = ({ width=25, height=17, fill='#fff' }: PropsIconBurger) => {
    return (
        <div style={{ width, height }}>
            <svg
                style={{width: 'inherit',height: 'inherit'}}
                viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="95" height="14" fill={fill} />
                <rect y="58" width="95" height="14" fill={fill} />
                <rect y="29" width="95" height="14" fill={fill} />
            </svg>

        </div>
    )
}