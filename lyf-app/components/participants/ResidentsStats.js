import React from 'react';

function ResidentsStats({ data = {} }) {
    return (
        <div className="p-4">
            <h1 className="font-extrabold text-lg">About the participants</h1>

            {/* Gender Ratio */}
            <div className="mt-2">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">👥</span>
                    <h2 className="font-semibold">Gender ratio</h2>
                </div>
                <div className="mb-4">
                    <div className="flex items-center mb-1">
                        <p className="mr-2 w-32 text-left">Male</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.genderRatio?.male || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.genderRatio?.male || 0}%</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-3">
                        <p className="mr-2 w-32 text-left">Female</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.genderRatio?.female || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.genderRatio?.female || 0}%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Age */}
            <div className="mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">👤</span>
                    <h2 className="font-semibold">Age</h2>
                </div>
                {Object.keys(data.ageDistribution || {}).map((ageGroup) => (
                    <div key={ageGroup} className="flex items-center mt-3">
                        <p className="mr-2 w-32 text-left">{ageGroup}</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.ageDistribution[ageGroup] || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.ageDistribution[ageGroup] || 0}%</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Solo Travelers */}
            <div className="mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🚶</span>
                    <h2 className="font-semibold">Solo Travelers</h2>
                </div>
                <div className="flex items-center mb-1">
                    <p className="mr-2 w-32 text-left">Solo</p>
                    <div className="flex items-center w-full">
                        <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.soloTravelers?.solo || 0}%` }}></div>
                        <p className="ml-2 font-semibold text-sm">{data.soloTravelers?.solo || 0}%</p>
                    </div>
                </div>
                <div className="flex items-center mt-3">
                    <p className="mr-2 w-32 text-left">Non-Solo</p>
                    <div className="flex items-center w-full">
                        <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.soloTravelers?.nonSolo || 0}%` }}></div>
                        <p className="ml-2 font-semibold text-sm">{data.soloTravelers?.nonSolo || 0}%</p>
                    </div>
                </div>
            </div>

            {/* Country */}
            <div className="mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🌍</span>
                    <h2 className="font-semibold">Country</h2>
                </div>
                {Object.keys(data.countryDistribution || {}).map((country) => (
                    <div key={country} className="flex items-center mt-3">
                        <p className="mr-2 w-32 text-left">{country}</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.countryDistribution[country] || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.countryDistribution[country] || 0}%</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Industry */}
            <div className="mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🏢</span>
                    <h2 className="font-semibold">Industry (Top 3)</h2>
                </div>
                {Object.keys(data.industry || {}).map((industry) => (
                    <div key={industry} className="flex items-center mt-3">
                        <p className="mr-2 w-32 text-left">{industry}</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.industry[industry] || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.industry[industry] || 0}%</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Purpose of Stay */}
            <div className="mt-6">
                <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🏨</span>
                    <h2 className="font-semibold">Purpose of stay</h2>
                </div>
                {Object.keys(data.purposeOfStay || {}).map((purpose) => (
                    <div key={purpose} className="flex items-center mt-3">
                        <p className="mr-2 w-32 text-left">{purpose}</p>
                        <div className="flex items-center w-full">
                            <div className="bg-black h-6 rounded-[10px]" style={{ width: `${data.purposeOfStay[purpose] || 0}%` }}></div>
                            <p className="ml-2 font-semibold text-sm">{data.purposeOfStay[purpose] || 0}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResidentsStats;
