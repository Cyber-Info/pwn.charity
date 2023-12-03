import { Fragment } from 'react';

const locations = [
    {
        name: 'WGU SageCon 2023 - 1st Place',
        people: [
            {
                name: 'Aaron Fillmore',
                handle: 'w33t',
                focus: 'Web, Forensics, OSINT',
                role: 'Team Captain'
            },
            {
                name: 'Juan Requena',
                handle: 'DirtyJ',
                focus: 'Reversing, Cryptography',
                role: 'Co-Captain'
            },
            {
                name: 'Christopher Peters',
                handle: 'variblex',
                focus: 'Forensics, Reversing',
                role: 'Member'
            },
            {
                name: 'Jenna Fowler',
                handle: 'cyberdumpling',
                focus: 'Forensics, Reversing',
                role: 'Member'
            },
            {
                name: 'David Aprill',
                handle: '_null',
                focus: 'Web, Cryptography',
                role: 'Member'
            }
        ]
    }
];

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function CtfEvents() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full">
                            <thead className="bg-transparent">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-3"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                    >
                                        Handle
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                    >
                                        Category Focus
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                    >
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {locations.map((location) => (
                                    <Fragment key={location.name}>
                                        <tr className="border-t border-[#003b00]/40">
                                            <th
                                                colSpan={5}
                                                scope="colgroup"
                                                className="bg-[#003b00]/20 py-2 pl-4 pr-3 text-left text-sm font-bold text-white sm:pl-3"
                                            >
                                                {location.name}
                                            </th>
                                        </tr>
                                        {location.people.map(
                                            (person, personIdx) => (
                                                <tr
                                                    key={person.focus}
                                                    className={classNames(
                                                        personIdx === 0
                                                            ? 'border-[#003b00]'
                                                            : 'border-[#003b00]/40',
                                                        'border-t'
                                                    )}
                                                >
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-3">
                                                        {person.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                        {person.handle}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                        {person.focus}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                        {person.role}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
