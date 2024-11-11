import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('e6cf2b8e-0b23-4a51-bdb7-d5e996e6e333', '1Talia_Volkman42@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('556cf1b6-8634-4a76-92b6-d7643ef4f3b5', '17Hassan12@gmail.com', 'User OneTwoThree', 'https://i.imgur.com/YfJQV5z.png?id=19', 'jkl345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c33132ef-0a4a-47d1-9851-e249492d6345', '25Rosetta.Runolfsson64@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'token789def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('cae837fa-6a2f-4734-92a7-cdae8d4638b2', '33Gustave59@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'jkl345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('54318ad4-3fb1-488c-8436-923c51b5c291', '41Retta67@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('abbdb5ba-00c2-4d94-b76b-39e40bb81273', '49Pearline_Runolfsdottir@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=51', 'ghi012invite', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bf30117b-a841-483f-9e38-0b7a9290020b', '57Armand74@hotmail.com', 'User OneTwoThree', 'https://i.imgur.com/YfJQV5z.png?id=59', 'ghi012invite', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c80528ab-81f3-410f-ab2b-d5d2d5b5f250', '65Kellie43@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'ghi012invite', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c64a4787-480d-45f5-affe-428090e9305b', '73Susanna_Miller33@hotmail.com', 'User OneTwoThree', 'https://i.imgur.com/YfJQV5z.png?id=75', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('0f8c6056-d933-45ff-a415-34e9c11d8a53', 'Gmail', 'alice_wonder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-12-28T04:01:57.496Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('5dd89b22-8a74-487c-9fd4-03015d05d658', 'Instagram', 'bob_builder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-08-19T10:35:32.957Z', 'e6cf2b8e-0b23-4a51-bdb7-d5e996e6e333');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('2d84176f-1606-4ed5-8d73-23fce48e0c0e', 'LinkedIn', 'user123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-06-30T10:46:14.698Z', 'c64a4787-480d-45f5-affe-428090e9305b');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('aafa4bbb-2a8f-4647-820c-932d5e47c164', 'Facebook', 'bob_builder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-03-16T13:48:39.755Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('1a7774d7-699d-414c-8140-3a4e3e55630c', 'Gmail', 'user123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2025-10-15T20:25:33.755Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('00fb9982-9044-4880-8132-269cc4f6ea26', 'Instagram', 'john_doe', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2025-10-29T16:43:09.090Z', '54318ad4-3fb1-488c-8436-923c51b5c291');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('fe0ab2ea-a27f-42b9-83e9-c127203fa16f', 'Instagram', 'user123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2025-08-04T21:47:14.506Z', 'c33132ef-0a4a-47d1-9851-e249492d6345');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('bfc84a11-6fff-4d19-95e5-d0f2ab638074', 'Gmail', 'bob_builder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-07-19T16:34:01.469Z', 'bf30117b-a841-483f-9e38-0b7a9290020b');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('271a3034-e5e3-409c-a377-e0d1370585ae', 'Twitter', 'bob_builder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-01-23T06:41:47.934Z', 'e6cf2b8e-0b23-4a51-bdb7-d5e996e6e333');
INSERT INTO "PasswordEntry" ("id", "appName", "username", "encryptedPassword", "lastCopied", "userId") VALUES ('6e7ad164-af79-4bcc-b5c0-563a6a2c6926', 'Instagram', 'bob_builder', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '2024-08-01T02:12:29.702Z', 'e6cf2b8e-0b23-4a51-bdb7-d5e996e6e333');

INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('f4319505-5183-4ab1-be0b-d45e8d33ee11', 'text', '2024-03-04T18:00:14.228Z', 'c64a4787-480d-45f5-affe-428090e9305b', '6e7ad164-af79-4bcc-b5c0-563a6a2c6926');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('e2b4860c-f1f0-44ee-9f94-c4672e8b56d1', 'file', '2024-12-21T13:46:22.711Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fe0ab2ea-a27f-42b9-83e9-c127203fa16f');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('3b5b30e1-5876-4bc7-9d9e-f97897c7b0a4', 'file', '2025-05-07T17:51:02.583Z', 'abbdb5ba-00c2-4d94-b76b-39e40bb81273', '1a7774d7-699d-414c-8140-3a4e3e55630c');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('ca929239-9d08-4907-880c-55a345f81b13', 'text', '2025-02-26T07:25:18.466Z', 'e6cf2b8e-0b23-4a51-bdb7-d5e996e6e333', '271a3034-e5e3-409c-a377-e0d1370585ae');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('4a060624-5398-479c-a125-6385b8bd3c41', 'url', '2024-05-25T22:57:13.663Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0f8c6056-d933-45ff-a415-34e9c11d8a53');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('5bf00eab-b52e-4f27-b396-87c58723713b', 'url', '2024-12-13T03:55:41.070Z', '556cf1b6-8634-4a76-92b6-d7643ef4f3b5', '6e7ad164-af79-4bcc-b5c0-563a6a2c6926');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('44a919ee-1ca3-48e4-b2fa-7625083cfc9f', 'url', '2024-01-10T09:39:12.719Z', 'abbdb5ba-00c2-4d94-b76b-39e40bb81273', '5dd89b22-8a74-487c-9fd4-03015d05d658');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('8c8984f1-1a32-4ad3-931a-91b97ceb5586', 'password', '2025-02-04T06:10:53.840Z', 'c64a4787-480d-45f5-affe-428090e9305b', 'bfc84a11-6fff-4d19-95e5-d0f2ab638074');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('7f4a812d-14c5-4fa4-8368-2ef21b978e5a', 'file', '2024-03-07T12:01:07.752Z', 'c80528ab-81f3-410f-ab2b-d5d2d5b5f250', '2d84176f-1606-4ed5-8d73-23fce48e0c0e');
INSERT INTO "ClipboardHistory" ("id", "type", "timestamp", "userId", "passwordEntryId") VALUES ('68058f03-b163-410e-8aa6-1359d3408aa4', 'image', '2024-09-16T15:24:03.034Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'aafa4bbb-2a8f-4647-820c-932d5e47c164');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
