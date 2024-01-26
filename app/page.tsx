import Image from 'next/image'
import prisma from './script'
import { Button, Divider, Table } from '@mui/joy'

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <header className='h-20 w-full mb-20' style={{ background: 'url(/top_bg.png) top center no-repeat', backgroundSize: 'contain' }}>
        </header>
        <Image className='mb-12' src={'/app_logo.jpeg'} width={100} height={100} alt={''} />
        <p className='text-2xl mb-4'>App</p>
        <p className='normal mb-16'>For IOS device</p>
        <Button className='w-60 mb-4' color="success" size="lg">Install</Button>
        <Divider className='w-7/12 self-center mt-12 mb-4'></Divider>
        <p className='text-xl w-7/12'>About</p>
        <Table className='w-7/12'>
          <tbody>
            <tr>
              <td>Size</td>
              <td>13.9 MB</td>
              <td>Publish at</td>
              <td>2023-05-31</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0</td>
              <td>Build</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
        <p className='text-xl w-7/12'>Version History</p>
        <Table className='w-7/12'>
          <tbody>
            <tr>
              <td>Size</td>
              <td>13.9 MB</td>
              <td>Publish at</td>
              <td>2023-05-31</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0</td>
              <td>Build</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0</td>
              <td>Build</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0</td>
              <td>Build</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0</td>
              <td>Build</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
        <footer className='h-20'></footer>
      </main>
    </>
  )
}
