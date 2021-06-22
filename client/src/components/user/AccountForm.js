import { useState } from 'react'; 
import { Form } from 'semantic-ui-react';
const AccountForm = () => {
  const [user, setUser] = useState({ username: "", membership: "" })
  const handleSubmit = (e) => {
    e.preventdefault()
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value })}
        required
        label="New Username"
      />
      <Form.Select
        name="membership"
        value={user.membership}
        onChange={(e) => setUser({...user, membership: e.target.value })}
        required
        label="new membership"
        options={membershipOpts}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}
const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
]
export default AccountForm;