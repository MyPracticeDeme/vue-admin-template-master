import request from '@/utils/request'
export default {
    //1.添加课程信息
    addcourseInfo(courseInfo) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/addCourseInfo`,
            method: 'post',
            data:courseInfo
        })
    },
    //2.查询所有讲师
    getListTeacher(){
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/teacher/findAll`,
            method: 'get',
        })
    },
    //3.根据课程id查询课程基本信息
    getCourseInfoId(id){
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/getCourseInfo/`+id,
            method: 'get',
        })
    },

    //4.修改课程信息
    updateCourseInfo(courseInfo){
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/updateCourseInfo`,
            method: 'post',
            data:courseInfo
        })
    },
    //5.课程确认信息显示
    getPublishCourseInfo(id){
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/getPublishCourseInfo/`+id,
            method: 'get',
        })
    },
    //5.课程最终发布
    publishCourse(id){
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/publishCourse/`+id,
            method: 'post',
        })
    },

    //TODO 课程列表
    //课程最终发布
    getListCourse() {
        return request({
            url: '/eduservice/edu-course',
            method: 'get'
          })
    },

    //课程删除
    deleteCourse(id){
        return request({
            url: `/eduservice/edu-course/`+id,
            method: 'delete'
          })

    },

    //1 课程列表（条件查询分页）
    //current当前页 limit每页记录数 teacherQuery条件对象
    getCourseListPage(current,limit,courseQuery) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/edu-course/pageCourseCondition/`+current+"/"+limit,
            method: 'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换json进行传递到接口里面
            data: courseQuery
          })
    },

}
