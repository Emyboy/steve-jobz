import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default function _Card() {
    return (
        <Card
            hoverable
            style={{ width: 240, margin: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}
