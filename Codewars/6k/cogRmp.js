// Kata Task
// You are given a list of cogs in a gear train

// Each element represents the number of teeth of that cog

// e.g. [100, 75] means

// 1st cog has 100 teeth
// 2nd cog has 75 teeth
// If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

// (use negative numbers for anti-clockwise rotation)

// Notes
// no two cogs share the same shaft
// Series:

// Cogs
// Cogs 2

function cogRmp(cogs) {
    let rpm = 1;
    for (let i=0; i<cogs.length-1; i++) {
        rpm = -rpm * cogs[i]/cogs[i + 1];
    }
    return rpm;
}
console.log(cogRmp([100,75])); //output: -1.3333333333333333
console.log(cogRmp([100,75,50])); //output: 2.6666666666666665
console.log(cogRmp([100,75,50,25])); //output: -5.333333333333333
