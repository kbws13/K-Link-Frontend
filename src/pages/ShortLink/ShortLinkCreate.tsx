import { addUrlRelateUsingPost } from '@/services/backend/shortLinkController';
import { history } from '@@/core/history';
import { LinkOutlined, MonitorOutlined, RocketOutlined } from '@ant-design/icons';
import { Card, Divider, Steps, Tooltip } from 'antd';
import Search, { SearchProps } from 'antd/lib/input/Search';

const onSearch: SearchProps['onSearch'] = async (value) => {
  const res = await addUrlRelateUsingPost({
    longUrl: value,
  });
  if (res.code === 0) {
    history.push('/shortLink/check?shortUrlId=' + res.data);
  }
};
export default () => {
  return (
    <div>
      <Card>
        <Tooltip title="提醒">
          <span>生成短链</span>
        </Tooltip>
      </Card>
      <Divider />
      <Card>
        <Steps
          current={0}
          items={[
            {
              title: '生成',
              description: '开始生成短链',
              icon: <LinkOutlined />,
            },
            {
              title: '查看',
              description: '查看短链',
              icon: <MonitorOutlined />,
            },
            {
              title: '发布',
              description: '发布短链',
              icon: <RocketOutlined />,
            },
          ]}
        />
        <Divider type={'horizontal'} />
        <Search
          placeholder="输入要缩短的网址，禁止违规违法内容，有权禁止账号或网址生成短链接"
          allowClear
          enterButton="生成"
          size="large"
          onSearch={onSearch}
        />
      </Card>
    </div>
  );
};
