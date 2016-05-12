	qehData = new Array();
	pchData = new Array();
	for(var i = 0; i < 4; i++){
		qehData.push(new Array);
		pchData.push(new Array);
		for(var j = 0; j < 2; j++){
			qehData[i].push(new Array())
			pchData[i].push(new Array())
		}
	}
	d3.csv("waittimes.csv", function(error, data){
		if(error) throw error;
		data.forEach(function(d){
			var hospital = d.hospital;
			var measureName = d.measurename;
			var measureVar = d.measurevariant;
			if(hospital == "qeh"){
				if(measureName == "mosturgent"){
					if(measureVar == "wait"){
						qehData[0][0].push(d);
					}
					else if(measureVar == "number"){
						qehData[0][1].push(d);
					}
				}
				else 	if(measureName == "urgent"){
					if(measureVar == "wait"){
						qehData[1][0].push(d);
					}
					else if(measureVar == "number"){
						qehData[1][1].push(d);
					}
				}
				else 	if(measureName == "lessurgent"){
					if(measureVar == "wait"){
						qehData[2][0].push(d);
					}
					else if(measureVar == "number"){
						qehData[2][1].push(d);
					}
				}
				else 	if(measureName == "treating"){
					if(measureVar == "number"){
						qehData[3][0].push(d);
					}
				}
			}
			else if(hospital == "pch"){
				if(measureName == "mosturgent"){
					if(measureVar == "wait"){
						pchData[0][0].push(d);
					}
					else if(measureVar == "number"){
						pchData[0][1].push(d);
					}
				}
				else 	if(measureName == "urgent"){
					if(measureVar == "wait"){
						pchData[1][0].push(d);
					}
					else if(measureVar == "number"){
						pchData[1][1].push(d);
					}
				}
				else 	if(measureName == "lessurgent"){
					if(measureVar == "wait"){
						pchData[2][0].push(d);
					}
					else if(measureVar == "number"){
						pchData[2][1].push(d);
					}
				}
				else 	if(measureName == "treating"){
					if(measureVar == "number"){
						pchData[3][0].push(d);
					}
				}
			}
		});
	});
