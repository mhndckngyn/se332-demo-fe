const perks = [
  {
    icon: "\u2695",
    title: "Full Healthcare",
    description: "We believe in thriving communities and that starts with our team being happy and healthy."
  },
  {
    icon: "\u{1F30A}",
    title: "Unlimited Vacation",
    description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun."
  },
  {
    icon: "\u{1F4DA}",
    title: "Skill Development",
    description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course."
  },
  {
    icon: "\u{1F6E0}",
    title: "Team Summits",
    description: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter."
  },
  {
    icon: "\u{1F4BB}",
    title: "Remote Working",
    description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it."
  },
  {
    icon: "\u{1F68C}",
    title: "Commuter Benefits",
    description: "We’re grateful for all the time and energy each team member puts into getting to work every day."
  },
  {
    icon: "\u{1F64F}",
    title: "We Give Back",
    description: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two."
  }
];

export default function Benefits() {
  return (
    <section className="py-12 px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#25324B] text-center mb-6">Perks & Benefits</h2>
      <p className="text-center text-gray-600 mb-12">
        This job comes with several perks and benefits
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perks.map((perk, index) => (
          <div key={index} className="space-x-4 p-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl text-blue-600">{perk.icon}</span>
            <div>
              <h3 className="my-4 text-lg font-semibold text-[#25324B]">{perk.title}</h3>
              <p className="text-gray-600 text-sm">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
