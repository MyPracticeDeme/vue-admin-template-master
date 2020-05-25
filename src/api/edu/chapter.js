import request from '@/utils/request'
export default {
    //1.根据课程id获取章节和小结的数据列表
    getAllChapterVideo(courseId) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-chapter/getChapterVideo/`+courseId,
            method: 'get',
        })
    },
}