import ArticleLayout from "../components/ArticleLayout.tsx";
import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";
import ArticleList from "../components/ArticleList.tsx";
import ArticleTable from "../components/ArticleTable.tsx";
import ArticleTitle from "../components/ArticleTitle.tsx";
import AgentScroller1 from "./Articles2025-3-3/AgentScroller1.tsx";
import AgentScroller2 from "./Articles2025-3-3/AgentScroller2";
import { LandLink } from "@suminhan/land-design";

export const articles2025_3_3 = <ArticleLayout>
  <ArticleSectionLayout>
    <ArticlePartLayout>
      <ArticleTitle type={'h2'} title={'前言：Agent UI 对话式布局有哪些特点？'} />
      <ArticleDesc>截止今日，我已经在两个 AI 产品中接触到了对话式的布局，和目前大多数 AI 产品一样，在用户输入与结果输出的这场交流中，我们的产品也选择了对话式的交互形式，像与朋友聊天的回复一般，将生成结果发送到用户眼前。本篇文章的重点是想全面系统地探索与一下 AI 产品的对话式布局，这里有就两个关键词，AI和对话式布局。</ArticleDesc>
      <ArticleDesc>对话式布局广泛应用在绝大部分的聊天软件中，通常具备一下特点（感谢 DS 倾情助力）：</ArticleDesc>
      <ArticleDesc useBg>
        <ArticleList ordered list={[
          <><span className={'bold'}>核心布局结构</span><ArticleList list={[
            <><span className={'bold'}>三分区垂直布局</span><ArticleList list={['消息展示区（顶部80%屏幕)：历史消息气泡流', '输入操作区（底部固定栏）：文本输入+功能扩展按钮', '状态提示区（顶部/底部边缘）：对方输入状态、网络状态、时间戳']} /></>,
            <><span className={'bold'}>双向消息流</span><ArticleList list={['用户消息右对齐', '对方消息左对齐', '时间中线分割：重要时间节点显示（如"昨天 15:30"）']} /></>
          ]} /></>,
          <><span className={'bold'}>消息呈现设计</span><ArticleList list={[
            <><span className={'bold'}>智能气泡系统</span><ArticleList list={['自适应宽度', '统一处理图片/视频/文件多媒体容器', '状态标识系统：✅发送成功 → ✅✅已送达 → ✅✅✅已读']} /></>,
            <><span className={'bold'}>上下文关联设计</span><ArticleList list={['引用回复：嵌套显示原始消息片段', '消息菜单：长按触发删除/转发/收藏等操作']} /></>
          ]} /></>,
          <><span className={'bold'}>输入交互体系</span><ArticleList list={[
            <><span className={'bold'}>多模态输入扩展</span><ArticleList list={['自适应高度输入框', '附件菜单', '快捷操作按钮']} /></>,
            <><span className={'bold'}>智能输入反馈</span><ArticleList list={['@提及高亮：自动匹配联系人列表', '输入状态同步："对方正在输入..."实时提示', '内容预解析：URL自动转链接预览']} /></>
          ]} /></>,
          <><span className={'bold'}>滚动与加载优化</span><ArticleList list={[
            <><span className={'bold'}>消息导航机制</span><ArticleList list={['自动锚定：新消息到达时锁定底部位置', '加载更多历史：向上滚动触发分页加载（显示"加载中..."提示）', '跳转定位：点击未读消息标识快速定位']} /></>,
            <><span className={'bold'}>性能优化策略</span><ArticleList
              list={['虚拟化列表：使用react-window/vue-virtual-scroller处理长列表', '差异更新：仅渲染可视区域变化部分', '资源懒加载：图片/视频滚动到视口时开始加载']} /></>
          ]} /></>,
          <><span className={'bold'}>状态可视化设计</span><ArticleList list={[
            <ArticleTable>
              <thead>
                <tr>
                  <th>状态类型</th>
                  <th>视觉表现</th>
                  <th>交互反馈</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>发送中</td>
                  <td>气泡尾部旋转loading图标</td>
                  <td>可取消发送</td>
                </tr>
                <tr>
                  <td>发送失败</td>
                  <td>红色感叹号+重试按钮</td>
                  <td>点击自动重发</td>
                </tr>
                <tr>
                  <td>已读状态</td>
                  <td>显示已读，消息底部显示接收者头像微缩图	</td>
                  <td>点击查看已读详细名单</td>
                </tr>
                <tr>
                  <td>撤回通知	</td>
                  <td>灰色系统提示"某消息已撤回"</td>
                  <td>长按显示撤回前内容快照</td>
                </tr>
              </tbody>
            </ArticleTable>,
          ]} /></>,
          <><span className={'bold'}>多端适配方案</span><ArticleList list={[
            <span className={'bold'}>响应式适配</span>,
            <><span className={'bold'}>跨平台一致性策略</span><ArticleList
              list={['iOS/Android差异处理：遵循各自平台规范（如iOS右滑返回）', 'Web/桌面端增强：支持快捷键（Ctrl+Enter发送）', '多窗口协同：手机扫码登录后的状态同步']} /></>
          ]} /></>,
          <><span className={'bold'}>特色交互模式</span><ArticleList list={[
            <><span className={'bold'}>情景化交互</span><ArticleList list={['语音消息进度拖拽：滑动调整播放位置', '消息翻译切换：长按切换多语言显示', '红包特效：特殊动效+点击展开']} /></>,
            <><span className={'bold'}>无障碍设计</span><ArticleList list={['屏幕阅读器适配：为图片消息添加alt文本描述', '高对比度模式：确保色盲用户可辨识消息状态', '触控热区优化：按钮最小48×48px点击区域']} /></>
          ]} /></>,
          <><span className={'bold'}>安全隐私设计</span><ArticleList list={[
            <><span className={'bold'}>敏感内容防护</span><ArticleList list={['模糊预览：未知链接/文件显示安全警告', '阅后即焚：倒计时销毁敏感消息', '截屏检测：金融类对话禁止截屏（Android）']} /></>,
            <><span className={'bold'}>认证可视化</span><ArticleList list={['加密会话标识：端到端加密聊天显示锁形图标', '设备指纹：新设备登录时显示机型标识']} /></>
          ]} /></>,
        ]} />
      </ArticleDesc>
      <ArticleDesc>AI 产品正是借鉴了我们与朋友聊天的方式，采用了这种布局方式，也自然而然地具备了上述的很多特点，结合 AI 产品本身的特点，这些相似之处可以总结如下：</ArticleDesc>
      <ArticleDesc>
        <ArticleList ordered list={[
          <><span className={'bold'}>核心对话结构</span><ArticleList list={[
            <><span className={'bold'}>消息流布局：</span>均采用垂直排列的对话气泡，用户输入右对齐，系统/对方回复左对齐</>,
            <><span className={'bold'}>时序展示：</span>通过时间戳或上下文分割线（如“新对话开始”）维护对话时序</>,
            <><span className={'bold'}>滚动锚定：</span>新消息到达时自动滚动到底部（如GPT的持续生成场景）</>,
          ]} /></>,
          <><span className={'bold'}>基础交互模式</span><ArticleList list={[
            <><span className={'bold'}>输入反馈：</span>显示“对方正在输入”状态（如DeepSeek的生成指示符）</>,
            <><span className={'bold'}>消息操作：</span>支持复制、删除、重新生成</>,
            <><span className={'bold'}>多模态支持：</span>均可处理文本/代码/图片</>,
          ]} /></>,
          <><span className={'bold'}>状态可视化</span><ArticleList list={[
            <><span className={'bold'}>网络状态提示：</span>均显示连接状态（如断线重连提示）</>,
            <><span className={'bold'}>操作反馈：</span>发送成功/失败的状态标识（如错误消息的红色警示）</>,
          ]} /></>
        ]} />
      </ArticleDesc>
      <ArticleDesc>但是当聊天的那位朋友变成 AI 时，这种对话式布局也会自然会产生一些差异：</ArticleDesc>
      <ArticleDesc>
        <ArticleList ordered list={[
          <><span className={'bold'}>信息结构差异</span><ArticleList list={[
            <ArticleTable>
              <thead>
                <tr>
                  <th>维度</th>
                  <th>AI 对话界面</th>
                  <th>聊天软件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={'bold'}>消息主体</td>
                  <td>单用户 vs 系统AI</td>
                  <td>单用户或多用户社交网络</td>
                </tr>
                <tr>
                  <td className={'bold'}>内容类型</td>
                  <td>侧重知识/代码（Markdown高亮）</td>
                  <td>侧重社交内容（图片/视频/红包）</td>
                </tr>
                <tr>
                  <td className={'bold'}>消息密度</td>
                  <td>长文本段落为主</td>
                  <td>短消息+碎片化交流</td>
                </tr>
              </tbody>
            </ArticleTable>,
          ]} /></>,
          <><span className={'bold'}>交互逻辑差异</span><ArticleList list={[
            <ArticleTable>
              <thead>
                <tr>
                  <th>维度</th>
                  <th>AI 对话界面</th>
                  <th>聊天软件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={'bold'}>消息流控制</td>
                  <td>流式响应（逐字输出）+ 停止生成按钮</td>
                  <td>完整消息一次性送达</td>
                </tr>
                <tr>
                  <td className={'bold'}>上下文管理</td>
                  <td>显式的会话分支管理（如ChatGPT的会话树）</td>
                  <td>隐式时序上下文（通过引用回复扩展）</td>
                </tr>
              </tbody>
            </ArticleTable>
          ]} /></>,
          <><span className={'bold'}>状态可视化</span><ArticleList list={[
            <><span className={'bold'}>网络状态提示：</span>均显示连接状态（如断线重连提示）</>,
            <><span className={'bold'}>操作反馈：</span>发送成功/失败的状态标识（如错误消息的红色警示）</>,
          ]} /></>
        ]} />
      </ArticleDesc>
      <ArticleDesc>综合以上的特点，我认为实现流畅的 AI 产品对话式布局的重点是实现好上下文滚动布局、消息流控制两个方面。接下来我会详细地从这两个方面入手，记录我在实现这种布局时的探索与思考。</ArticleDesc>
    </ArticlePartLayout>

    <ArticlePartLayout>
      <ArticleTitle type={'h2'} title={'上下文滚动布局'} />
      <ArticleDesc>对话式上下文滚动布局的核心是导航锚定机制，<span
        className={'bold'}>新消息到达时锁定底部位置，向上滚动触发分页加载</span>。</ArticleDesc>
      <ArticleDesc>然而在网页开发的语言里，信息一直是从上往下加载的，信息超过显示区域时，也是从上往下滚动浏览的，这似乎和
        AI 的对话布局刚好相反，这自然是需要解决的关键问题。</ArticleDesc>
      <div className={'flex column gap-4 items-center'}>
        <div className={'px-12 py-24 width-100 bg-gray border-box'} style={{ height: '240px', overflow: 'auto' }}>
          <div className={'flex both-center fs-12 color-gray-4'}
            style={{ height: '400px', backgroundColor: 'var(--color-border-1)' }}>历史会话...
          </div>
        </div>
        <div className={'fs-12 color-gray-4'}>常规的网页滚动布局</div>
      </div>
      <ArticleDesc><span className={'bold'}>👀看看别的产品怎么实现的？</span>在记录我的实现方式之前，先一起看看其他
        AI 产品，甚至是聊天产品是怎么实现的？</ArticleDesc>

      <ArticleTitle type={'h3'} title={'第一种：常规布局 ➕ 实时滚动到底部'} />
      <ArticleDesc noIndent>案例：<LandLink href={'https://deepseek.com/'}>DeepSeek</LandLink></ArticleDesc>
      <ArticleTitle type={'h4'} title={'实现步骤'} />
      <ArticleDesc>step 1. 在页面初始化时自动定位到底部：</ArticleDesc>
      <AgentScroller1 />
      <ArticleDesc>step 2. 结合 AI 逐字输出实时定位到底部：</ArticleDesc>
      <AgentScroller2 />
      <ArticleDesc>step 3. 解决难点——回答过程中页面会持续地滚动到底部，因此页面本身的滚动浏览会受到影响，即在回答过程中是不支持向上滚动的。如何解决呢？🤔</ArticleDesc>

      <ArticleTitle type={'h4'} title={'优点'} />
      <ArticleDesc>这种实现方式因为没有改动网页常规布局，而是通过 js 控制滚动容器的位置，所以不会影响到网页滚动布局中的一些元素和交互，如滚动条的位置、展开收起交互等（对比后续方案）。</ArticleDesc>
      <ArticleTitle type={'h4'} title={'缺点'} />
    </ArticlePartLayout>
  </ArticleSectionLayout>
</ArticleLayout>
