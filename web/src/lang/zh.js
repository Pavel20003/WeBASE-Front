export default {
    project: {
        name: '节点控制台',
        blocks: '区块数量',
        nodes: '节点数量',
        transactions: '交易数量',
        pendingTransactions: '待交易数量',
    },
    route: {
        statistics: '数据概览',
        nodeManagement: '节点管理',
        nodeManagementQ: '节点管理',
        contractManagement: '合约管理',
        contractManagementQ: '合约管理',
        contractIDE: '合约IDE',
        contractList: '合约列表',
        systemMonitoring: '系统监控',
        hostMetrics: '主机指标',
        nodeMetrics: '节点指标',
        privateKeyManagement: '私钥管理',
        privateKeyManagementQ: '私钥管理',
    },
    navbar: {
        dashboard: '首页',
        github: '项目地址',
        logOut: '退出登录',
        profile: '个人中心',
        theme: '换肤',
        size: '布局大小'
    },
    documentation: {
        documentation: '文档',
        github: 'Github 地址'
    },
    permission: {
        addRole: '新增角色',
        editPermission: '编辑权限',
        roles: '你的权限',
        switchRoles: '切换权限',
        tips: '提示',
        delete: '删除',
        confirm: '确定',
        cancel: '取消'
    },
    components: {
        documentation: '文档',
        tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
        dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
        stickyTips: '当页面滚动到预设的位置会吸附在顶部',
        backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
        backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
        imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
    },
    table: {
        type: '类型',
        search: '搜索',
        addUser: '新增用户',
        importPrivateKey: '导入私钥',
        export: '导出',
        id: '序号',
        date: '时间',
        status: '状态',
        actions: '操作',
        edit: '编辑',
        publish: '发布',
        delete: '删除',
        cancel: '取 消',
        confirm: '确 定',
        nodeId: '节点ID',
        blockHeight: '块高',
        pbftView: 'pbftView',
        run: '运行',
        abnormal: '异常',
        address: '地址',
        publicKey: '公钥',
        user: '用户',
        transactionHash: '交易Hash',
        transactionInfo: '交易信息',
        transactionReceipt: '交易回执',
        contractName: '合约名称',
        contractPath: '合约目录',
        contractAddress: '合约地址',
        contractAbi: '合约abi',
        contractBin: '合约bin',
        createdTime: '创建时间',
    },
    errorLog: {
        tips: '请点击右上角bug小图标',
        description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
        documentation: '文档介绍'
    },
    excel: {
        export: '导出',
        selectedExport: '导出已选择项',
        placeholder: '请输入文件名(默认excel-list)',
    },
    zip: {
        export: '导出',
        placeholder: '请输入文件名(默认file)'
    },
    notice: {
        copySuccessfully: '复制成功',
        copyFailure: '值为空，不复制'
    },
    dialog: {
        addUsername: '添加用户名',
        pleaseEnterUserName: '请输入用户名',
        rivateKeyVerifyLength: '长度在 3 到 32 个字符',
        rivateKeyVerifyLength1_32: '长度在 1 到 32 个字符',
        rivateKeyVerifyFont: '只能是数字或者字母组成',
        rename: '重命名',
        newFile: '新建文件',
        delete: '删除',
        exportJavaNote: '注意：合约名和文件名必须相同',
        cancel: '取 消',
        confirm: '确 认',
        sureExport: '确认导出',
        sureDelete: '确认删除',
        contractNameIllegal: '合约名不符合规则',
        folderNameIllegal: '文件名不符合规则',
        folderName: '文件夹名称',
        pleaseType: '请输入',
    },
    placeholder: {
        globalSearch: '请输入 Block / Txn Hash',
        javaPackage: '如：com.webank',
        selected: '请选择',
        selectedAccountAddress: '请选择用户地址',
        selectedNoUser: '没有用户，请去私钥管理新建用户',
        selectedContractAddress: '请输入合约地址',
        functionName: '方法名',
        contractListSearch: '请输入合约名或合约地址',
        selectedDay: '选择日期',
        selectedTimeRange: '选择时间范围',
        to: '至',
        startTime: '开始时间',
        endTime: '结束时间',
    },
    title: {
        copyHash: '复制哈希',
        copy: '复制',
        copyAddress: '复制地址',
        copyPubliceKey: '复制公钥',
        copyContractAddress: '复制合约地址',
        copyContractName: '复制合约名',
        copyAbi: '复制abi',
        copyBin: '复制bin',
        newFile: '新建文件',
        newFolder: '新建文件夹',
        upload: '上传文件',
        save: '保存',
        compile: '编译',
        deploy: '部署',
        callContract: '合约调用',
        exportJavaFile: '导出java文件',
        handleSave: '按Ctrl+s保存合约内容',
        handleCompile: '按Alt+c 编译合约',
        handleDeploy: '按Alt+d 部署合约',
        handleCallContract: '按Alt+t 合约调用',
        selectAccountAddress: '选择用户地址',
        writeJavaName: '请填写java包名',
        selectDirectory: '选择目录',
        txnContractAddExp: '选填项，导入已部署的合约地址',
        restore: '还原',
        zoom: '区域缩放',
        back: '区域缩放还原',
        stack: '堆叠',
        tiled: '平铺',
        detailsAbi: 'abi详情',
        detailsTxn: '交易内容',
        acquisitionSwitch: '采集数据开关',
    },
    text: {
        noContract: '请在左侧面板点击打开一个合约或新建一个合约',
        hide: '隐藏',
        expand: '显示',
        compilationFailed: '合约未编译或编译失败',
        compilationSucceeded: '合约编译成功',
        compilationBegin: '合约开始编译',
        compiling: '合约编译中...',
        contractFileName: '合约名和文件名要保持一致',
        saveFailed: '保存失败！',
        saveSucceeded: '保存成功！',
        deploySucceeded: '部署成功',
        deployFailed: '部署失败！',
        redeploy: '合约已被修改，请重新部署！',
        systemError: '系统错误',
        contractSameDirectory: '同一目录下不能存在同名合约',
        unsavedContract: '合约未保存是否保存',
        contractName: '合约名称',
        filePath: '文件目录',
        pleaseEnter: '请输入',
        errorNewFolderName: '新建文件夹与已存在的文件夹名称相同',
        contractAddress: '合约地址',
        acountAddress: '私钥地址',
        parame: '参数',
        deployParameVec: '如果参数类型是数组，请用逗号分隔，不需要加上引号，例如：arry1,arry2。string等其他类型也不用加上引号。',
        searchSucceeded: '查询成功',
        txnSucceeded: '交易成功',
        txnFailed: '交易失败',
        sendFailed: '发送交易失败',
        sendFunction: '方法',
        showDate: '显示日期',
        comparingDate: '对比日期',
        fromTo: '起止时间',
        dataGranularity: '数据粒度',
        minutes: '分钟',
        seconds: '秒钟',
        confirm: '确认',
        usage: '利用率',
        hardDisk: '硬盘',
        memory: '内存',
        uplink: '上行',
        downlink: '下行',
        bandwidth: '带宽',
        blockHeight: '区块高度',
        pendingTransactions: '待打包的交易数',
        comparingByDay: '对比日数据',
        noMetrics: '未采集到数据或者数据为0',
        showByDay: '显示日数据',
        searchEmpty: '查询结果为空',
        noData: '暂无数据',
        importSuccessed: '导入成功',
        importFailed: '导入失败',
        addUserSuccessed: '新增成功',
        deleteUserSuccessed: '删除成功',
        nameNoSame: '用户名不能相同',
        uploadSol: '请上传.sol格式的文件',
        fileExceeds: '文件大小超过400k，请上传小于400k的文件',
        txnDecodeBtn: '解码',
        txnEncodeBtn: '还原',
        toggleSuccessed: '切换成功',
        toggleFailed: '切换失败'
    }
}
