import {
  Typography,
  Button,
  Form,
  Input,
  Space,
  message,
  Popconfirm,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PasswordDetailsPage() {
  const navigate = useNavigate()
  const { passwordId } = useParams()
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()

  // Fetch password entry details
  const { data: passwordEntry, refetch } = Api.passwordEntry.findFirst.useQuery(
    {
      where: { id: passwordId },
    },
  )

  // Update mutation
  const { mutateAsync: updatePassword } = Api.passwordEntry.update.useMutation()

  // Delete mutation
  const { mutateAsync: deletePassword } = Api.passwordEntry.delete.useMutation()

  const handleEdit = async (values: any) => {
    try {
      await updatePassword({
        where: { id: passwordId },
        data: {
          appName: values.appName,
          username: values.username,
          encryptedPassword: values.password,
        },
      })
      message.success('Password updated successfully')
      setIsEditing(false)
      refetch()
    } catch (error) {
      message.error('Failed to update password')
    }
  }

  const handleDelete = async () => {
    try {
      await deletePassword({ where: { id: passwordId } })
      message.success('Password deleted successfully')
      navigate('/home')
    } catch (error) {
      message.error('Failed to delete password')
    }
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      message.success(`${type} copied to clipboard`)
    } catch (error) {
      message.error('Failed to copy to clipboard')
    }
  }

  if (!passwordEntry) return null

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-key"></i> Password Details
        </Title>
        <Text type="secondary">View and manage your password entry</Text>

        {isEditing ? (
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              appName: passwordEntry.appName,
              username: passwordEntry.username,
              password: passwordEntry.encryptedPassword,
            }}
            onFinish={handleEdit}
            style={{ marginTop: 24 }}
          >
            <Form.Item
              label="App Name"
              name="appName"
              rules={[{ required: true }]}
            >
              <Input prefix={<i className="las la-desktop"></i>} />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input prefix={<i className="las la-user"></i>} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password prefix={<i className="las la-lock"></i>} />
            </Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            </Space>
          </Form>
        ) : (
          <div style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <Text strong>App Name: </Text>
              <Text>{passwordEntry.appName}</Text>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text strong>Username: </Text>
              <Space>
                <Text>{passwordEntry.username}</Text>
                <Button
                  type="text"
                  icon={<i className="las la-copy"></i>}
                  onClick={() =>
                    copyToClipboard(passwordEntry.username || '', 'Username')
                  }
                />
              </Space>
            </div>
            <div style={{ marginBottom: 24 }}>
              <Text strong>Password: </Text>
              <Space>
                <Text>{passwordEntry.encryptedPassword}</Text>
                <Button
                  type="text"
                  icon={<i className="las la-copy"></i>}
                  onClick={() =>
                    copyToClipboard(
                      passwordEntry.encryptedPassword || '',
                      'Password',
                    )
                  }
                />
              </Space>
            </div>
            <Space>
              <Button type="primary" onClick={() => setIsEditing(true)}>
                <i className="las la-edit"></i> Edit
              </Button>
              <Popconfirm
                title="Delete Password"
                description="Are you sure you want to delete this password?"
                onConfirm={handleDelete}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>
                  <i className="las la-trash"></i> Delete
                </Button>
              </Popconfirm>
            </Space>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
