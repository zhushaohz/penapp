<template>
  <div id="listpage">
    <t-tabs v-model="value">
      <t-tab-panel :value="1" label="人流途径">
        <div class="tabledescription">
          <p>人流途径是指实验人员在实验室内意外的病原体暴露或沾染，并在离开实验室的时候携出病原体，引起自身及密切接触者暴露感染的情况，包括实验过程中的暴露沾染与退出程序中的暴露沾染，风险因素如表所示。</p>
        </div>
        <div class="risktable">
          <t-table
            :data="data1"
            :columns="columns"
            :bordered=true
            :max-height="450"
          />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="2" label="物流途径">
        <div class="tabledescription">
          <p>物流途径指在实验室人员实验运行过程中或实验结束后将部分实验材料携出实验室外保存或在其他实验室（同级实验室或低级实验室）中继续开展实验的过程中造成病原体的外环境泄漏，具体包括仪器设备携出、样本携出、感染/污染动物昆虫逃逸导致扩散，风险因素如表所示。</p>
        </div>
        <div class="risktable">
          <t-table
            :data="data2"
            :columns="columns"
            :bordered=true
            :max-height="450"
          />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="3" label="水流途径">
        <div class="tabledescription">
          <p>污水处理系统是实验室用以灭菌处理实验中产生并集中收集的含大量病原体废液的设备，目前实验室废水处理主要有物理热力灭菌和化学消毒灭菌两种方法。水流途径泄漏就是指病原体从污水下水管道和污水处理系统泄漏，或污水处理系统灭菌不完全，造成的病原体外环境泄漏，具体包括污水在消毒灭菌前泄漏、进行了消毒灭菌，但不彻底、未经消毒灭菌处理即排放，风险因素如表所示。</p>
        </div>
        <div class="risktable">
          <t-table
            :data="data3"
            :columns="columns"
            :bordered=true
            :max-height="420"
          />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="4" label="气流途径">
        <div class="tabledescription">
          <p>实验室通风系统与围护结构都是实验室二级防护屏障的重要组成部分，实验室以此形成实验室内定向气流、负压梯度，实现实验室之间、实验室内外环境之间病原体的隔离，通风系统高效过滤器是实现排风中可能存在的微生物病原体过滤的最重要设施，保证病原体不会随排风泄漏外环境。气流途径泄漏指的是病原体气溶胶通过通风系统和围护结构扩散，造成实验室不同区域之间的污染和实验室内外环境之间的污染，具体包括排风/排气系统泄漏、围护结构泄漏，风险因素如表所示。</p>
        </div>
        <div class="risktable">
          <t-table
            :data="data4"
            :columns="columns"
            :bordered=true
            :max-height="390"
          />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="5" label="固态废弃物途径">
        <div class="tabledescription">
          <p>固态废弃物途径泄漏指的是实验室产生的固态废弃物和少量收集的废液以及防护服、手套、口罩等可高压的防护装备未进行消毒灭菌或者消毒灭菌不彻底导致病原微生物泄漏，风险因素如表所示。</p>
        </div>
        <div class="risktable">
          <t-table
            :data="data5"
            :columns="columns"
            :bordered=true
            :max-height="450"
          />
        </div>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
const data1 = [
  {
    index: '1.1',
    factor:'人员暴露',
    description: '实验操作人员个体防护出现破损或者人员身体暴露在病原微生物环境下'
  },
  {
    index: '1.1.1',
    factor:'个人防护出现问题',
    description: '人员未安装要求穿戴个体防护装备'
  },
  {
    index: '1.1.1.1',
    factor:'未正确识别出风险并采取相应的防护措施',
    description: '在个体防护方面没有进行全面的风险识别，存在风险隐患'
  },
  {
    index: '1.1.1.2',
    factor:'防护措施未达效果',
    description: '因为防护用品问题导致防护效果未达到要求'
  },
  {
    index: '1.1.1.2.1',
    factor:'选用了不合适的防护用品',
    description: '未按规定佩戴指定防护用品'
  },
  {
    index: '1.1.1.2.2',
    factor:'防护用品性能不达标',
    description: '防护用品出现质量问题'
  },
  {
    index: '1.1.1.2.3',
    factor:'防护用品使用不恰当',
    description: '未按规定正确使用防护用品'
  },
  {
    index: '1.1.2',
    factor:'病原暴露',
    description: '人员身体暴露在病原微生物环境下'
  },
  {
    index: '1.1.2.1',
    factor:'黏膜暴露',
    description: '人体外表面黏膜沾染病原'
  },
  {
    index: '1.1.2.1.1',
    factor:'样品溢洒、飞溅',
    description: '样品使用过程中，造成样品泄漏'
  },
  {
    index: '1.1.2.1.2',
    factor:'气溶胶暴露',
    description: '样品泄漏生成气溶胶，导致暴露'
  },
  {
    index: '1.1.2.2',
    factor:'损伤暴露',
    description: '人员因为外伤沾染病原'
  },
  {
    index: '1.1.2.2.1',
    factor:'不慎跌倒',
    description: '人员在实验室中跌倒，导致损伤'
  },
  {
    index: '1.1.2.2.1.1',
    factor:'长时间/疲劳工作等个人原因',
    description: '过度劳累，导致身体疲惫'
  },
  {
    index: '1.1.2.2.1.2',
    factor:'环境或工作原因导致绊倒等',
    description: '实验过程中意外摔倒'
  },
  {
    index: '1.1.2.2.2',
    factor:'锐器/机械创伤',
    description: '因为针刺、机械设备导致的外伤感染'
  },
  {
    index: '1.1.2.2.2.1',
    factor:'各种实验操作',
    description: '实验室中的各类实验活动'
  },
  {
    index: '1.1.2.2.2.2',
    factor:'实验室内其他活动',
    description: '实验室中其他非实验类活动'
  },
  {
    index: '1.1.2.3',
    factor:'呼吸道暴露',
    description: '人体呼吸道暴露导致的人员感染'
  },
  {
    index: '1.1.2.3.1',
    factor:'已经识别的气溶胶风险',
    description: '实验室环境已经识别的有害病原'
  },
  {
    index: '1.1.2.3.1.1',
    factor:'隔离措施不当',
    description: '操作柜等隔离防护措施不合规'
  },
  {
    index: '1.1.2.3.1.2',
    factor:'隔离措施意外失效',
    description: '病原隔离措施因意外导致泄漏'
  },
  {
    index: '1.1.2.3.2',
    factor:'未经识别的气溶胶风险',
    description: '实验环境未识别的有害病原'
  },
  {
    index: '1.1.2.3.2.1',
    factor:'缺少有效隔离措施',
    description: '缺少完善的隔离措施'
  },
  {
    index: '1.1.2.3.2.2',
    factor:'隔离措施意外失效',
    description: '病原隔离措施因意外导致泄漏'
  },
  {
    index: '1.2',
    factor:'人员表面沾染带出病原',
    description: '人员表面未清洁导致病原泄漏'
  },
  {
    index: '1.2.1',
    factor:'防护用品未全脱导致沾染携出',
    description: '人员防护装备未全部脱净，导致病原沾染防护装备泄漏'
  },
  {
    index: '1.2.2',
    factor:'脱去防护用品后未清洁干净',
    description: '防护装备未按要求导致消毒灭菌不彻底'
  },
  {
    index: '1.2.2.1',
    factor:'未洗澡或清洁',
    description: '人员未进行实验室准出消毒程序'
  },
  {
    index: '1.2.2.2',
    factor:'洗澡或清洁不彻底',
    description: '人员实验室准出消毒程序不彻底'
  },
]
const data2 = [
  {
    'index': '2.1',
    'factor': '仪器设备携出',
    'description': '仪器设备中病原微生物被携出'
  },
  {
    'index': '2.1.1',
    'factor': '设备未消毒',
    'description': '仪器设备未按规定进行消毒'
  },
  {
    'index': '2.1.2',
    'factor': '仪器设备消毒不彻底',
    'description': '仪器设备未按规定消毒彻底'
  },
  {
    'index': '2.1.2.1',
    'factor': '全面消毒但未彻底杀灭',
    'description': '病原微生物没有彻底灭菌'
  },
  {
    'index': '2.1.2.1.1',
    'factor': '方法不当（不正确的设备/消毒剂）',
    'description': '消毒灭菌的方法不正确'
  },
  {
    'index': '2.1.2.1.2',
    'factor': '性能不当（设备性能不达标/消毒剂性能失效等）',
    'description': '消毒灭菌的设备不合格'
  },
  {
    'index': '2.1.2.1.3',
    'factor': '参数不当（剂量/温度、时间等）',
    'description': '消毒灭菌的参数选择不合格'
  },
  {
    'index': '2.1.2.2',
    'factor': '只消毒部分部位，未全面消毒',
    'description': '消毒灭菌不全面'
  },
  {
    'index': '2.2',
    'factor': '样本携出',
    'description': '病原通过样本被携出实验室'
  },
  {
    'index': '2.2.1',
    'factor': '包装内样本泄漏',
    'description': '病原通过包装内样本泄漏'
  },
  {
    'index': '2.2.1.1',
    'factor': '包装失效导致样本泄漏',
    'description': '样本包装不合格导致病原泄漏'
  },
  {
    'index': '2.2.1.1.1',
    'factor': '包装不完整导致泄漏',
    'description': '样本包装不严密导致病原泄漏'
  },
  {
    'index': '2.2.1.1.2',
    'factor': '包装被破坏导致泄漏',
    'description': '样本包装表面破损，导致病原泄漏'
  },
  {
    'index': '2.2.1.2',
    'factor': '可以暴露的样本混入病原导致泄漏',
    'description': '样本暴露在病原环境下'
  },
  {
    'index': '2.2.1.2.1',
    'factor': '消毒不彻底',
    'description': '包装内部消毒灭菌不彻底'
  },
  {
    'index': '2.2.1.2.1.1',
    'factor': '方法不当（不正确的设备/消毒剂）',
    'description': '消毒灭菌方法不正确'
  },
  {
    'index': '2.2.1.2.1.2',
    'factor': '性能不当（设备性能不达标/消毒剂失效等）',
    'description': '消毒灭菌设备不合格'
  },
  {
    'index': '2.2.1.2.1.3',
    'factor': '参数不当（剂量/温度、时间等）',
    'description': '消毒灭菌过程选用参数不当'
  },
  {
    'index': '2.2.1.2.2',
    'factor': '混入活病原',
    'description': '样本中不慎混入病原'
  },
  {
    'index': '2.2.1.2.2.1',
    'factor': '混入同种病原',
    'description': '样本中混入同一种病原'
  },
  {
    'index': '2.2.1.2.2.2',
    'factor': '混入异种病原',
    'description': '样本中混入其他病原'
  },
  {
    'index': '2.2.2',
    'factor': '样本包装表面污染',
    'description': '样本包装的表面消毒不彻底受到污染'
  },
  {
    'index': '2.2.2.1',
    'factor': '未消毒',
    'description': '样本包装表面未进行消毒处理'
  },
  {
    'index': '2.2.2.2',
    'factor': '消毒不彻底',
    'description': '样本包装表面消毒灭菌不彻底'
  },
  {
    'index': '2.2.2.2.1',
    'factor': '参数不当（剂量/作用时间）',
    'description': '消毒灭菌方法不正确'
  },
  {
    'index': '2.2.2.2.2',
    'factor': '方法不当（设备/消毒剂）',
    'description': '消毒灭菌设备不合格'
  },
  {
    'index': '2.2.2.2.3',
    'factor': '性能不当（设备问题/消毒剂过期失效）',
    'description': '消毒灭菌过程选用参数不当'
  },
  {
    'index': '2.3',
    'factor': '感染/污染动物昆虫逃逸导致扩散',
    'description': '受到病原污染的实验动物昆虫逃逸造成病原泄漏'
  },
  {
    'index': '2.3.1',
    'factor': '实验动物/昆虫逃逸',
    'description': '实验用的动物昆虫发生逃逸事件'
  },
  {
    'index': '2.3.1.1',
    'factor': '节肢动物',
    'description': '身体由许多环节组成的无脊椎动物'
  },
  {
    'index': '2.3.1.2',
    'factor': '非节肢动物',
    'description': ''
  },
  {'index': '2.3.2', 'factor': '非实验用动物/昆虫感染/污染并逃逸', 'description': '非实验用的动物昆虫发生逃逸事件'},
  {'index': '2.3.2.1', 'factor': '节肢动物', 'description': '身体由许多环节组成的无脊椎动物'},
  {'index': '2.3.2.2', 'factor': '非节肢动物', 'description': ''}
]
const data3 = [
  {'index': 3.1, 'factor': '未经消毒灭菌处理即排放', 'description': '实验室污水未经消毒灭菌就排放，导致病原泄漏'}, {'index': '3.1.1', 'factor': '正常不需要处理但被污染', 'description': '不需要消毒灭菌的污水被病原污染'}, {'index': '3.1.1.1', 'factor': '意外事件导致水污染', 'description': '实验室发生意外导致水流污染'}, {'index': '3.1.1.2', 'factor': '风险评估未识别出水污染需处理', 'description': '风险识别不够彻底，未识别出风险源'}, {'index': '3.1.2', 'factor': '正常需要处理但未执行', 'description': '未按照规程进行污水处理工作'}, {'index': 3.2, 'factor': '污水在消毒灭菌前泄漏', 'description': '污水因为意外导致破损泄漏'}, {'index': '3.2.1', 'factor': '管道破裂、泄漏', 'description': '污水管道发生破裂导致泄漏'}, {'index': '3.2.2', 'factor': '罐体破裂、泄漏', 'description': '储水罐体发生破裂导致泄漏'}, {'index': '3.2.3', 'factor': '连接部位渗漏', 'description': '储水罐体和管道连接处破裂导致泄漏'}, {'index': 3.3, 'factor': '污水进行了消毒灭菌，但不彻底', 'description': '污水消毒灭菌未按规程进行彻底灭菌'}, {'index': '3.3.1', 'factor': '污水消毒灭菌方法不正确', 'description': '污水消毒灭菌未按规程选择适当的灭菌方法'}, {'index': '3.3.1.1', 'factor': '消毒剂问题', 'description': '消毒剂存在质量问题'}, {'index': '3.3.1.1.1', 'factor': '方法不当（种类、浓度、时间）', 'description': '消毒剂使用的方法的不正确'}, {'index': '3.3.1.1.2', 'factor': '性能不当（过期、失效、不合格）', 'description': '消毒剂存在质量问题'}, {'index': '3.3.1.1.3', 'factor': '使用不当（剂量、时间等）', 'description': '消毒剂使用方式存在问题'}, {'index': '3.3.1.2', 'factor': '选择不合适的消毒设备/运行参数', 'description': '消毒灭菌设备和参数不合适'}, {'index': '3.3.2', 'factor': '污水处理系统性能不达标', 'description': '消毒灭菌系统质量和性能不满足实验室需要'}, {'index': '3.3.2.1', 'factor': '验证合格，实际消毒灭菌效果不合格', 'description': '消毒灭菌验证合格，但消毒灭菌效果不达标'}, {'index': '3.3.2.2', 'factor': '合格验证存在问题', 'description': '消毒灭菌验证存在问题'}, {'index': '3.3.2.2.1', 'factor': '未进行验证', 'description': '消毒灭菌未进行相关验证'}, {'index': '3.3.2.2.2', 'factor': '验证已过期', 'description': '消毒灭菌验证时间已过期'}, {'index': '3.3.2.2.3', 'factor': '验证结果不可靠', 'description': '消毒灭菌验证程序存在问题导致验证结果不可靠'}, {'index': '3.3.3', 'factor': '污水消毒灭菌过程未完成', 'description': '污水消毒灭菌过程中断，导致消毒灭菌不彻底'}, {'index': '3.3.3.1', 'factor': '使用中设备故障', 'description': '消毒灭菌设备在使用过程中出现故障，导致消毒过程不连续'}, {'index': '3.3.3.1.1', 'factor': '未定期维护', 'description': '消毒灭菌设备未进行定期维护'}, {'index': '3.3.3.1.2', 'factor': '正常维护条件下的偶发性故障', 'description': '消毒灭菌设备存在偶然故障'}, {'index': '3.3.3.2.', 'factor': '不正确操作', 'description': '消毒灭菌设备操作使用方法不正确'}
]
const data4 = [
  {'index': 4.1, 'factor': '排风/排气系统泄漏', 'description': '实验室排风、排气系统发生泄漏，导致病原泄漏'}, {'index': '4.1.1', 'factor': '排风/排气HEPA泄漏', 'description': '因为HEPA造成的病原泄漏'}, {'index': '4.1.1.1', 'factor': 'HEPA本身泄漏', 'description': 'HEPA设备本身存在的故障导致泄漏'}, {'index': '4.1.1.2', 'factor': 'HEPA安装问题导致周边泄漏', 'description': 'HEPA在安装过程中导致周边附属设备病原泄漏'}, {'index': '4.1.2', 'factor': '与滤器不相关的其他泄漏', 'description': '排风系统外的其他设备存在的泄漏'}, {'index': 4.2, 'factor': '围护结构泄漏', 'description': '实验室围护结构遭受破坏导致病原泄漏'}, {'index': '4.2.1', 'factor': '围护结构遭受物理性破坏', 'description': '围护结构遭受物理性破坏，导致围护结构破损'}, {'index': '4.2.1.1', 'factor': '自然破坏', 'description': '受到自然灾害影响，导致实验室围护破坏'}, {'index': '4.2.1.2', 'factor': '人为破坏', 'description': '实验室人员误操作导致围护结构破坏'}, {'index': '4.2.2', 'factor': '围护结构未破坏但出现泄漏', 'description': '围护结构不严密出现泄漏'}, {'index': '4.2.2.1', 'factor': '防护失效', 'description': '实验室防护措施失效'}, {'index': '4.2.2.1.1', 'factor': '气密性房间物理密封措施失效', 'description': '实验室气密性房间物理防控措施失效，导致病原泄漏'}, {'index': '4.2.2.1.1.1', 'factor': '墙体密封失效', 'description': '实验室墙体密封措施失效'}, {'index': '4.2.2.1.1.2', 'factor': '穿墙设备及等管道丧失气密性', 'description': '实验室穿墙的设备及管道发生破损导致泄漏'}, {'index': '4.2.2.1.2', 'factor': '无气密性要求房间发生泄漏', 'description': '非气密性房间发生泄漏'}, {'index': '4.2.2.2', 'factor': '压力梯度丧失', 'description': '实验室内部压力出现问题，导致压力梯度丧失'}, {'index': '4.2.2.2.1', 'factor': '主备电源电力故障', 'description': '实验室电源出现问题，造成停电事故'}, {'index': '4.2.2.2.2', 'factor': '排风系统及自控系统故障', 'description': '排风系统出现故障，导致排风不能有效进行'}
]
const data5 = [
  {'index': 5.1, 'factor': '未进行消毒灭菌处理', 'description': '固态废弃物未进行消毒灭菌就被携出到外环境'}, {'index': '5.1.1', 'factor': '人为失误携出', 'description': '人员误操作导致病原被携出'}, {'index': '5.1.1.1', 'factor': '风险评估失误，未要求消毒灭菌', 'description': '风险评估不彻底，未发现风险因素'}, {'index': '5.1.1.2', 'factor': '拿错', 'description': '固态废弃物拿错'}, {'index': '5.1.2', 'factor': '故意携出', 'description': '人为主观携出病原'}, {'index': 5.2, 'factor': '已进行消毒灭菌处理，但不彻底', 'description': '固态废弃物消毒灭菌不彻底'}, {'index': '5.2.1', 'factor': '消毒灭菌方法不正确', 'description': '消毒灭菌选择方法不合适'}, {'index': '5.2.1.1', 'factor': '消毒剂问题', 'description': '消毒剂存在质量问题'}, {'index': '5.2.1.2', 'factor': '选择不合适的消毒设备/运行参数', 'description': '消毒灭菌设备不适合'}, {'index': '5.2.2', 'factor': '消毒灭菌设备性能不达标', 'description': '消毒灭菌设备性能不能满足生物实验室需要'}, {'index': '5.2.2.1', 'factor': '验证合格，实际消毒灭菌效果不合格', 'description': '消毒灭菌验证合格，但消毒灭菌过程存在问题导致消毒灭菌不彻底'}, {'index': '5.2.2.2', 'factor': '合格验证存在问题', 'description': '消毒灭菌验证存在问题'}, {'index': '5.2.2.2.1', 'factor': '未进行验证', 'description': '消毒灭菌后未进行验证'}, {'index': '5.2.2.2.2', 'factor': '验证已过期', 'description': '未按时进行消毒灭菌验证'}, {'index': '5.2.2.2.3', 'factor': '验证结果不可靠', 'description': '验证过程存在问题导致验证结果不可靠'}, {'index': '5.2.3', 'factor': '消毒灭菌过程未完成', 'description': '消毒灭菌过程中断，灭菌不连续'}, {'index': '5.2.3.1', 'factor': '使用中设备故障', 'description': '消毒设备发生故障导致消毒过程中断'}, {'index': '5.2.3.1.1', 'factor': '未定期维护', 'description': '消毒灭菌设备未进行定期维护导致故障'}, {'index': '5.2.3.1.2', 'factor': '正常维护条件下的偶发性故障', 'description': '消毒灭菌设备在使用过程中出现故障'}, {'index': '5.2.3.2', 'factor': '不正确操作', 'description': '人员误操作导致灭菌过程中断'}
]

const columns = [
  {
    align: 'center',
    width: '200',
    className: 'row',
    colKey: 'index',
    title: '序号',
  },
  {
    colKey: 'factor',
    title: '风险因素',
  },
  {
    colKey: 'description',
    title: '描述',
  },
]
</script>

<style scoped>
#listpage{
  background: #fff;
  font-size: 1rem;
}
.tabledescription{
  width: 80%;
  margin: 0.8rem auto;
  padding-left: 1rem;
  padding-right: 1rem;
  border: solid 1px #000000;
  border-radius: 1rem;
  text-align: justify;
  text-indent: 2rem;
}
</style>
