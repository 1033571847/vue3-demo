<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item label="emailword" name="email">
      <a-input v-model:value="formState.email" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="phone" name="phone">
      <a-input v-model:value="formState.phone" autocomplete="off" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import type { Rule } from "ant-design-vue/es/form";
import { defineComponent, reactive, ref } from "vue";
import type { FormInstance } from "ant-design-vue";
interface FormState {
  email: string;
  phone: string;
}
export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      email: "",
      phone: "",
    });
    let validateemail1 = async (_rule: Rule, value: string) => {
      if (value === "") {
        return Promise.reject("Please input the email");
      } else {
        return Promise.resolve();
      }
    };
    let validateemail2 = async (_rule: Rule, value: string) => {
      if (value === "") {
        return Promise.reject("Please input the phone");
      } else if (!/^1[(86|35)]\d{9}$/.test(value)) {
        return Promise.reject("请输入正确的电话号码");
      } else {
        return Promise.resolve();
      }
    };

    const rules: Record<string, Rule[]> = {
      phone: [{ validator: validateemail2, trigger: "blur" }],
      email: [{ validator: validateemail1, trigger: "blur" }],
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: any) => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value?.resetFields();
    };
    const handleValidate = (...args: any) => {
      console.log(args);
    };
    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      handleValidate,
    };
  },
});
</script>
