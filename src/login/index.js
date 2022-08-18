import { Button, Modal, Input, } from 'antd';
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const Login = () => {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [loader, setLoader] = useState(false);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleSubmit = async () => {
        try {
            setLoader(true);
            let _res = await window.moi_id.login(username, password, { unlockWallet: true });
            if (_res) {
                let userAddress = await window.moi_id.getDefaultMoiIDAddress();
                alert(`Hi, ${username} ${userAddress}`);
                setIsModalVisible(false);
            }
            setLoader(false);
        }
        catch (Err) {
            console.log(Err);
        }
    }
    return (
        <>
            <Modal title="Login" visible={isModalVisible}
                footer={null}
            >
                <Input placeholder='Username' style={{ marginBottom: "20px" }} size="large"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Input placeholder='Password' size="large" style={{ marginBottom: "20px" }}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{ textAlign: "center" }}>
                    {!loader ? <Button type='primary' onClick={() => handleSubmit()}>Login with Moi-Id</Button> :
                        <LoadingOutlined style={{ fontSize: 24 }} spin />}
                </div>
            </Modal>
        </>
    );
};

export default Login;