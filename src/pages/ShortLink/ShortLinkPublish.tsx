import {
  Button,
  Card,
  Result,
} from 'antd';
import { history } from '@@/core/history';
export default () => {
  return (
    <div>
      <Card>
        <Result
          status="success"
          title="恭喜"
          subTitle="发布成功"
          extra={[
            <Button type="primary" key="console" onClick={()=>{history.push("/shortLink/myLink")}}>
              返回我的短链
            </Button>,
          ]}
        />
      </Card>
    </div>
  );
};
