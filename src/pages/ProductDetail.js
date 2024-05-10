import { Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();

    const [dataDetail, setDataDetail] = useState({});
    console.log(id);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(({data}) => {
            setDataDetail(data);
        })
        .catch((err) => {
            setDataDetail({});
        });
    }, [id]);
    
    console.log(dataDetail);
  return (
    <Content>
        <Typography.Text>
            <h1>Product Detail</h1>
        </Typography.Text>
        <h1> </h1>
        <Typography.Text>
            <h2>{dataDetail?.title}</h2>
        </Typography.Text>
        <img src={dataDetail?.thumbnail} alt={dataDetail?.title} />
        <h1> </h1>
        <Typography.Text>
            <h4>{dataDetail?.description}</h4>
        </Typography.Text>
    </Content>
  )
}

export default ProductDetail