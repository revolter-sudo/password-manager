import { Typography, Input, Card, Row, Col, Button, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch password entries
  const { data: passwords, refetch } = Api.passwordEntry.findMany.useQuery({
    where: {
      userId: user?.id,
      appName: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

  // Copy password mutation
  const { mutateAsync: copyPassword } = Api.passwordEntry.update.useMutation()

  const handleCopyPassword = async (id: string, password: string) => {
    try {
      await navigator.clipboard.writeText(password)
      await copyPassword({
        where: { id },
        data: { lastCopied: new Date().toISOString() },
      })
      message.success('Password copied to clipboard!')
      refetch()
    } catch (error) {
      message.error('Failed to copy password')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-key"></i> Password Manager
          </Title>
          <Text>
            Securely store and manage all your passwords in one place.
          </Text>
        </div>

        <div
          style={{
            marginBottom: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input
            placeholder="Search by app name..."
            prefix={<i className="las la-search"></i>}
            style={{ width: 300 }}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Button
            type="primary"
            icon={<i className="las la-plus"></i>}
            onClick={() => navigate('/passwords/new')}
          >
            Add New Password
          </Button>
        </div>

        <Row gutter={[16, 16]}>
          {passwords?.map(entry => (
            <Col xs={24} sm={12} md={8} lg={6} key={entry.id}>
              <Card
                hoverable
                style={{ height: '100%' }}
                actions={[
                  <Button
                    key="copy"
                    type="text"
                    icon={<i className="las la-copy"></i>}
                    onClick={() =>
                      entry.encryptedPassword &&
                      handleCopyPassword(entry.id, entry.encryptedPassword)
                    }
                  >
                    Copy
                  </Button>,
                  <Button
                    key="view"
                    type="text"
                    icon={<i className="las la-eye"></i>}
                    onClick={() => navigate(`/passwords/${entry.id}`)}
                  >
                    View
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <i className="las la-lock"></i>
                      {entry.appName || 'Unnamed App'}
                    </div>
                  }
                  description={
                    <>
                      <div>
                        <Text type="secondary">Username: </Text>
                        {entry.username || 'N/A'}
                      </div>
                      <div>
                        <Text type="secondary">Last copied: </Text>
                        {entry.lastCopied
                          ? dayjs(entry.lastCopied).format('YYYY-MM-DD HH:mm')
                          : 'Never'}
                      </div>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {passwords?.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <i
              className="las la-folder-open"
              style={{ fontSize: 48, color: '#999' }}
            ></i>
            <Title level={4}>No passwords found</Title>
            <Text type="secondary">
              Start by adding your first password entry
            </Text>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
