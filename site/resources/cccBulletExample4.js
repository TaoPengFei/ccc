new pvc.BulletChart({
    canvas:  'cccBulletExample4',
    width:   600,
    height:  200,
    animate: false,
    orientation: 'horizontal',
    
    bulletSize:    25,
    bulletSpacing: 50,
    bulletMargin:  100,
    
    bulletSubtitle: "fixed sub-title",
    bulletRanges:   [200, 500, 1000]
})
.setData(bullet_NameValueMarker)
.render();