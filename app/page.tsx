import { TodoList } from "@/components/todo-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Můj TO-DO List
        </h1>
        <TodoList />
      </div>
    </main>
  )
}
