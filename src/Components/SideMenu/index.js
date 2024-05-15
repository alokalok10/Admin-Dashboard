import React from "react";
import { Menu, Avatar } from "antd";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, LogoutOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Image from "./../../assets/Image.jpg";



const SideMenu = () => {
    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <div  style={{ display: "flex", justifyContent: "center", padding: "16px" }}>
                <Avatar  size={110} src={Image} />
            </div>
            <Menu
                onClick={(item) => {
                    navigate(item.key);
                }}
                items={[
                    {
                        key: "/",
                        icon: <AppstoreOutlined />,
                        label: "Dashboard",
                    },
                    {
                        key: "/inventory",
                        icon: <ShopOutlined />,
                        label: "Inventory",
                    },
                    {
                        key: "/orders",
                        icon: <ShoppingCartOutlined />,
                        label: "Orders",
                    },
                    {
                        key: "/customers",
                        icon: <UserOutlined />,
                        label: "Customers",
                    },
                    // Add Logout and Help items here
                    {
                        key: "/logout",
                        icon: <LogoutOutlined />,
                        label: "Logout",
                    },
                    {
                        key: "/help",
                        icon: <QuestionCircleOutlined />,
                        label: "Help",
                    },
                ]}
            ></Menu>
        </div>
    );
};

export default SideMenu;
