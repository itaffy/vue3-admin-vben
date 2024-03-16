import { BasicColumn, FormSchema } from '@/components/Table';
import { h } from 'vue';
import { Switch, Tag } from 'ant-design-vue';
import { setRoleStatus } from '@/api/demo/system';
import { useMessage } from '@/hooks/web/useMessage';

type CheckedType = boolean | string | number;
export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'Name',
  },
  {
    title: '状态',
    dataIndex: 'State',
    customRender: ({ record }) => {
      const state = record.State;
      const enable = state === false;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
    // customRender: ({ record }) => {
    //   if (!Reflect.has(record, 'pendingStatus')) {
    //     record.pendingStatus = false;
    //   }
    //   return h(Switch, {
    //     checked: record.State === '1',
    //     checkedChildren: '停用',
    //     unCheckedChildren: '启用',
    //     loading: record.pendingStatus,
    //     onChange(checked: CheckedType) {
    //       record.pendingStatus = true;
    //       const newStatus = checked ? '1' : '0';
    //       const { createMessage } = useMessage();
    //       setRoleStatus(record.id, newStatus)
    //         .then(() => {
    //           record.State = newStatus;
    //           createMessage.success(`已成功修改角色状态`);
    //         })
    //         .catch(() => {
    //           createMessage.error('修改角色状态失败');
    //         })
    //         .finally(() => {
    //           record.pendingStatus = false;
    //         });
    //     },
    //   });
    // },
  },
  {
    title: '创建时间',
    dataIndex: 'AddTime',
  },
  {
    title: '备注',
    dataIndex: 'Explan',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 4 },
  },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '1' },
  //       { label: '停用', value: '0' },
  //     ],
  //   },
  //   colProps: { span: 8 },
  // },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '角色值',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
  },
];
