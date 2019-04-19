<template>
    <form action="" method="post" role="form">
      <legend>编辑英雄</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input type="text" class="form-control" v-model="form.name">
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <input type="text" class="form-control" v-model="form.gender">
      </div>
      <button type="button" class="btn btn-primary" @click="edit()">提交</button>
    </form>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                form:{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            getData(){
                // 要根据id获取英雄数据
                const id=this.$route.params.id
                // 发送请求
                axios.get('http://localhost:3000/heroes/'+id)
                .then(res=>{
                    this.form=res.data
                }).catch(err=>{
                    alert("获取失败")
                })
            },
            edit(){
                this.form.ctime=new Date()
                axios.put('http://localhost:3000/heroes/' + this.form.id, this.form)
                .then(res=>{
                    // 修改成功后跳转列表组件
                    this.$router.push('/heroes')
                }).catch(err=>alert("修改失败"))
            }
        },
        mounted() {
            this.getData()
        },
    }
</script>

<style  scoped>

</style>