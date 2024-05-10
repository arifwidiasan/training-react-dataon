import { Button, Card, Col, Row, Typography } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=6&skip=${skip}`)
    .then(({data}) => {
        setData((prevState) => {
            if (skip === 0) {
                return data?.products
            }
            return [...prevState, ...data?.products]
        });
    })
    .catch((error) => {
       setData([]);
    });
    }, [skip]);

    const handleFetchViewMore = () => {
        setSkip((prev) => prev + 6);
    }

    console.log(data);
  return (
    <Row gutter={[8, 8]}>
        {data?.map((item, index) => {
            return (
                <Col span={8}>
                    <Card
                    onClick={() => {
                        navigate(`/product/${item?.id}`);
                    }
                    }
                    >
                        <Typography.Text>
                            {item?.title}
                        </Typography.Text>
                        <img src={item?.thumbnail} alt={item?.title} />
                        <h1> </h1>
                        <Typography.Text>
                            {item?.description}
                        </Typography.Text>
                    </Card>
                </Col>
            );
        })};
        
    <div>
        <Button 
        onClick={() => {
            handleFetchViewMore();
        }}
        type="primary">
        View More
        </Button>
    </div>
    </Row>
  );
}

export default Product