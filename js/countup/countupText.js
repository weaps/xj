var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
};
var demo = new CountUp('myTargetElement', 0, 4313, 0, 2.5, options);
    if (!demo.error) {
    demo.start();
} else {
    console.error(demo.error);
}
