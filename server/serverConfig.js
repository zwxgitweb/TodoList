const fs = require('fs');
const http = require('http');
module.exports = function (app) {

    // 添加任务接口
    app.post('/todoList/addTasks', function (req, res) {
        let data = JSON.parse(fs.readFileSync('server/task.json'));
        data.push({...req.body, templated: false});
        fs.writeFileSync('server/task.json', JSON.stringify(data));
        res.end(JSON.stringify({
            code: 1,
            success: "添加成功！"
        }));
    })

    // 获取任务接口
    app.post('/todoList/getTasks', function (req, res) {
        let data = fs.readFileSync('server/task.json');
        res.end(data);
    })

    // 删除已完成任务接口
    app.post('/todoList/deleteTasks', function (req, res) {
        let data = JSON.parse(fs.readFileSync('server/task.json'));
        let info = {
            code: 0,
            info: '删除失败'
        }
        data.map((item, index) => {
            if (index == req.body.index) {
                data[index].templated = !data[index].templated;
                fs.writeFileSync('server/task.json', JSON.stringify(data));
                info = {
                    code: 1,
                    info: {...data[index], index}
                }
            }
        })
        res.end(JSON.stringify(info));
    })
    // 服务器端监听端口9000
    app.listen(9000, function () {
        console.log('server listen 9000');
    })
}