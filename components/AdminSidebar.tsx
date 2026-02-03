const sections = ["Hero", "About", "Testimonials", "FAQ"]

export const AdminSidebar = ({ active, setActive }: any) => (
  <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col gap-2">
    <h2 className="text-xl font-bold mb-6 px-2">Dashboard</h2>
    {sections.map((s) => (
      <button
        key={s}
        onClick={() => setActive(s)}
        className={`text-left p-3 rounded-xl transition-all ${active === s ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-500 hover:bg-gray-50"}`}
      >
        {s} Section
      </button>
    ))}
  </aside>
)
