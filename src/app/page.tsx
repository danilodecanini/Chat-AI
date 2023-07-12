import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-50 items-center justify-center'>
      <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vencel AI SDK</CardDescription>
        </CardHeader> 
        <CardContent className='space-y-4'>
          <div className='flex gap-3 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>DC</AvatarFallback>
              <AvatarImage src='https://github.com/danilodecanini.png' />
            </Avatar>
            <p className='leading-relexed'>
              <span className='block font-bold text-slate-700'>Human: </span>
              What is your opinion about AI?
            </p>
          </div>

          <div className='flex gap-3 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>DC</AvatarFallback>
              <AvatarImage src='https://github.com/github.png' />
            </Avatar>
            <p className='leading-relexed'>
              <span className='block font-bold text-slate-700'>Human: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic quam animi repellat, sequi, saepe, cum deleniti consequuntur ipsa nisi eveniet eos labore fugiat nesciunt corrupti architecto facilis velit. Sequi.
            </p>
          </div>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Input placeholder='How can I help you?'/>
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
