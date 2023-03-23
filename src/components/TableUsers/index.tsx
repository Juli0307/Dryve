import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import {
  ActionsContainer,
  ButtonAdd,
  ConfirmationContainer,
  FilterButtonContainer,
  FiltersActionContainer,
  StatusBadge,
  UsersContainer,
} from './styles';
import { BiDotsVerticalRounded, BiFilter } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { originData } from './data';
import Content from '../Content';
import Text from '../Text';
import { useTheme } from 'styled-components';
import { EditableCellProps, User } from '../../store/types';

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === 'number' ? (
      <InputNumber />
    ) : inputType === 'select' ? null : (
      <Input />
    );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: inputType !== 'select',
              message: `${title} obrigatório`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const TableUsers: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [editingKey, setEditingKey] = useState('');
  const [searchText, setSearchText] = useState('');
  const theme = useTheme();

  const isEditing = (record: User) => record.key === editingKey;

  const edit = (record: Partial<User> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as User;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const statusParser: any = {
    Cliente: (
      <StatusBadge backgroundColor="ice-blue">
        <Text fontSize="12px" component="span" color="bright-blue">
          Cliente
        </Text>
      </StatusBadge>
    ),
    Lead: (
      <StatusBadge backgroundColor="white-three">
        <Text fontSize="12px" component="span" color="brownish-grey-two">
          Lead
        </Text>
      </StatusBadge>
    ),
  };

  const columns = [
    {
      title: (
        <Text color="black-87" component="h4" fontSize="10px" opacity={0.5}>
          NOME
        </Text>
      ),
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      editable: true,
      style: { backgroundColor: '#fff' },
    },
    {
      title: (
        <Text
          color="black-87"
          component="h4"
          fontSize="10px"
          opacity={0.5}
          textAlign="end"
        >
          STATUS
        </Text>
      ),
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      editable: true,
      align: 'right',
      style: { backgroundColor: '#fff' },
    },
    {
      title: (
        <Text
          color="black-87"
          component="h4"
          fontSize="10px"
          opacity={0.5}
          textAlign="center"
        >
          TELEFONE
        </Text>
      ),
      dataIndex: 'phone',
      key: 'phone',
      width: '25%',
      align: 'center',
      editable: true,
    },
    {
      title: (
        <Text color="black-87" component="h4" fontSize="10px" opacity={0.5}>
          E-MAIL
        </Text>
      ),
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      editable: true,
    },
    {
      title: '',
      with: '200px',
      dataIndex: 'operation',
      render: (_: any, record: User) => {
        const editable = isEditing(record);
        return editable ? (
          <div>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm
              title="Tem certeza que deseja cancelar?"
              onConfirm={cancel}
            >
              <a>
                <Text fontSize="14px" component="span" color="coral">
                  Cancelar
                </Text>
              </a>
            </Popconfirm>
          </div>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            <BiDotsVerticalRounded size={25} style={{ color: '#666666' }} />
          </Typography.Link>
        );
      },
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: User) => ({
        record,
        inputType: col.dataIndex === 'status' ? 'select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const { Search } = Input;

  return (
    <Content>
      <ActionsContainer>
        <FiltersActionContainer>
          <FilterButtonContainer>
            <BiFilter color={theme['bright-blue']} size={24} />
            <Text component="h5" color="blue-violet" fontSize="14px">
              FILTRAR
            </Text>
          </FilterButtonContainer>
          <Search
            placeholder="Busca por nome..."
            onChange={handleSearch}
            style={{ width: 372 }}
          />
        </FiltersActionContainer>
        <NavLink to="/new">
          <ButtonAdd>
            <IoAddOutline size={20} color={theme['white-two']} />
            <Text
              component="span"
              fontSize="14px"
              fontWeight="500"
              textAlign="center"
              color="white-two"
            >
              ADICIONAR
            </Text>
          </ButtonAdd>
        </NavLink>
      </ActionsContainer>
      <Form form={form} component={false}>
        <UsersContainer>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered={false}
            rowSelection={rowSelection}
            dataSource={[
              ...filteredData.map((user) => ({
                ...user,
                status: statusParser[user.status],
              })),
            ]}
            // @ts-ignore
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
            }}
          />
        </UsersContainer>
      </Form>
    </Content>
  );
};
