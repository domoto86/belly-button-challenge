const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then((data) => {
    console.log(data)
})


function sample_charts(sample_id) {
    d3.json(url).then((data) => {
        console.log(data.samples)
        
        var sample = data.samples
        
        var sampleResults = sample.filter(sample => sample.id == sample_id)
        console.log(sampleResults)
        
        var sampleFirst = sampleResults[0]
        console.log(sampleFirst)

        var otuId = sampleFirst.otu_ids
        console.log(otuId)

        var otuLabel = sampleFirst.otu_labels
        console.log(otuLabel)

        var samplesValues = sampleFirst.sample_values
        console.log(samplesValues)
    // Bar Chart    
    var barChart = [{
        x: samplesValues.slice(0,10).reverse(),
        y: otuId.slice(0,10).map(otuId => `OTU ${otuId}`).reverse(),
        text: otuLabel.slice(0,10).reverse(),
        type: 'bar',
        marker: {
            color: 'blue',
            width: 1
            },
        orientation: 'h'
    }] 

    var barLayout = {
        title: `Top 10 OTUs found for ${sample_id}`
    }

    Plotly.newPlot('bar', barChart, barLayout)

    // Bubble Chart
    var bubbleChart = [{
        x: otuId,
        y: samplesValues,
        text: otuLabel,
        mode: 'markers',
        marker: {
            color: otuId,
            size: samplesValues
        }
    }]

    var bubbleLayout = {}
    })
}