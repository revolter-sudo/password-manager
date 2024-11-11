import { Typography, Form, Input, Button, message, Card } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AddPasswordPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const { mutateAsync: createPassword } = Api.passwordEntry.create.useMutation()

  const generateSecurePassword = () => {
    const length = 16
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
    let password = ''
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    form.setFieldsValue({ password })
  }

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true)
      await createPassword({
        data: {
          appName: values.appName,
          username: values.username,
          encryptedPassword: values.password,
          lastCopied: new Date().toISOString(),
          userId: user?.id,
        },
      })
      message.success('Password entry created successfully!')
      navigate('/home')
    } catch (error) {
      message.error('Failed to create password entry')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-key"></i> Add New Password
        </Title>
        <Text type="secondary">
          Create a new password entry for your vault by filling out the details
          below.
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="App Name"
              name="appName"
              rules={[{ required: true, message: 'Please enter the app name' }]}
            >
              <Input
                prefix={<i className="las la-app-store"></i>}
                placeholder="Enter app name"
              />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter the username' }]}
            >
              <Input
                prefix={<i className="las la-user"></i>}
                placeholder="Enter username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter the password' }]}
            >
              <Input.Password
                prefix={<i className="las la-lock"></i>}
                placeholder="Enter password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="dashed"
                onClick={generateSecurePassword}
                icon={<i className="las la-random"></i>}
                style={{ marginBottom: 16 }}
              >
                Generate Secure Password
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<i className="las la-save"></i>}
                block
              >
                Save Password Entry
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
