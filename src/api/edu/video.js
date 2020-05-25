import request from '@/utils/request'
export default {

    //添加小结
    addVideo(video) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/video/addVideo`,
            method: 'post',
            data:video
        })
    },

    //删除小结
    deleteVideo(id) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/video/`+id,
            method: 'delete',
        })
    },
}