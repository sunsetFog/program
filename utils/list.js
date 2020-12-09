const list = [
    {
        "text": "小程序",
        "badge": 4,
        "dot": false,
        "disabled": false,
        "children": [
            {
                "text": "生命周期",
                "id": 1,
                "disabled": false,
                "path": "./lifeCycle/lifeCycle"
            },
            {
                "text": "节点绑定",
                "id": 2,
                "disabled": false,
                "path": "./node/node"
            },
            {
                "text": "标签",
                "id": 3,
                "disabled": false,
                "path": "./tag/tag"
            },
            {
                "text": "子父组件",
                "id": 4,
                "disabled": false,
                "path": "./parents/parents"
            },
        ]
    },
    {
        "text": "拓展",
        "badge": 1,
        "dot": false,
        "disabled": false,
        "children": [
            {
                "text": "视频",
                "id": 201,
                "disabled": false,
                "path": "./video/video"
            },
            {
                "text": "wx-api",
                "id": 202,
                "disabled": false,
                "path": "./wx/wx"
            },
        ]
    }
]
module.exports = {  
    list
}