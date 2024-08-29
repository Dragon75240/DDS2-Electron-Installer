import { Button } from "antd";
import "../style/MenuBar.css";
import { CloseOutlined, ShrinkOutlined } from "@ant-design/icons";

function MenuBar() {
	let windowState = false;

	const maxMinWindow = async () => {
		if (windowState) {
			window.ipcRenderer?.send("DisableFullScreen");
		} else {
			window.ipcRenderer?.send("EnableFullScreen");
		}

        windowState = !windowState;
	};

	return (
		<>
			<div className="menuBar">
				<Button
					icon={<ShrinkOutlined />}
					shape="circle"
					onClick={maxMinWindow}
				/>
				<Button
					icon={<CloseOutlined />}
					shape="circle"
					onClick={window.close}
				/>
			</div>
		</>
	);
}

export default MenuBar;
