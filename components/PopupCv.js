import { Button, Modal, Spin } from "antd";
import React from "react";

const PopupCv = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button type="primary" onClick={showLoading} style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 999999999,
        }}>
        See My CV
      </Button>
      <Modal
        title={<p>CV - Rizqi Arta Fatullah</p>}
        footer={
          loading ? "" :
          <Button
            type="primary"
            href="/static/file/CV Rizqi Arta Fatullah.pdf"
            download="CV_Rizqi_Arta_Fatullah.pdf"
          >
            Download CV
          </Button>
        }
        open={open}
        width={800}
        onCancel={() => setOpen(false)}
      >
        <div className="w-full h-[500px]">
          {loading ? (
            <p className="text-center flex justify-center items-center m-auto h-[500px]">
              <Spin tip="Loading" size="large">
                {/* {content} */}
              </Spin>
            </p>
          ) : (
            // <iframe
            //   className="w-full h-[500px]"
            //   src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${window.location.origin}/static/file/CV%20Rizqi%20Arta%20Fatullah.pdf`}
            //   title="CV - Rizqi Arta Fatullah"
            // ></iframe>
            <p className="text-center flex justify-center items-center m-auto h-[500px]">
              {`Can't display this file. You still can download it by press button below.`}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PopupCv;
