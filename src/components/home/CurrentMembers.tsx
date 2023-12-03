import { ChevronRightIcon } from '@heroicons/react/20/solid';

const people = [
    {
        name: 'Aaron Fillmore',
        handle: 'w33t',
        role: 'Team Captain',
        href: 'https://www.linkedin.com/in/w33t/',
        active: true
    },
    {
        name: 'Juan Requena',
        handle: 'DirtyJ',
        role: 'Co-Captain',
        href: 'https://www.linkedin.com/in/juanrequena/',
        active: true
    },
    {
        name: 'Christopher Peters',
        handle: 'variblex',
        role: 'Member',
        href: 'https://www.linkedin.com/in/peterschristopher/',
        active: true
    },
    {
        name: 'Jenna Fowler',
        handle: 'cyberdumpling',
        role: 'Member',
        href: 'https://www.linkedin.com/in/jenna-fowler-5237832a1/',
        active: true
    },
    {
        name: 'David Aprill',
        handle: '_null',
        role: 'Member',
        href: 'https://www.linkedin.com/in/davidaprill/',
        active: true
    }
];

export default function CurrentMembers() {
    return (
        <ul role="list" className="divide-y divide-[#003b00]">
            {people.map((person) => (
                <li
                    key={person.handle}
                    className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-[#009927]/20 sm:px-6 lg:px-8"
                >
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white">
                                <a href={person.href} target="_blank">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {person.name}
                                </a>
                            </p>
                            <p className="mt-1 flex text-xs leading-5 text-gray-300">
                                {person.handle}
                            </p>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-white">
                                {person.role}
                            </p>
                            {person.active ? (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none animate-pulse rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-300">
                                        Active
                                    </p>
                                </div>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none animate-pulse rounded-full bg-red-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-300">
                                        Inactive
                                    </p>
                                </div>
                            )}
                        </div>
                        <ChevronRightIcon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}
