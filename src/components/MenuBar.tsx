import { Button } from "antd"
import '../style/MenuBar.css'
import { CloseOutlined } from "@ant-design/icons";

function MenuBar()
{
    return (
        <>
            <div className="menuBar">
                <Button icon={<CloseOutlined/>} shape="circle"></Button>
            </div>
        </>
    )
}

export default MenuBar;