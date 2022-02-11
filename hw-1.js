const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',     
    },
  ]


  function move(from, to) {
    const srcFolder =  folders.find(s => s.files && s.files.find(x => x.id === from ))
    const destFolder = folders.find((f) => f.id === to)

    const fileIndex = srcFolder.files.findIndex((f) => f.id === from)

        if (destFolder.files) {
            destFolder.files.push(srcFolder.files[fileIndex])

        } else {
            destFolder.files = {files: srcFolder.files[fileIndex]}
        }

        srcFolder.files.splice(fileIndex, 1);
        console.log(folders.map((f) => f.files));
    
}

function copy(from, to) {
    const srcFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === from))
    const destFolder = folders.find((f) => f.id === to)

    if (srcFolder && destFolder) {
        const fileIndex = srcFolder.files.findIndex((f) => f.id === from)

        if (destFolder.files) {
            destFolder.files.push(srcFolder.files[fileIndex])

        } else {
            destFolder.files = [srcFolder.files[fileIndex]]
        }

        console.log(folders.map((f) => f.files));

    } 
}

function remove(id) {
    const folder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

         const copyIndex = folder.files.findIndex((f) => f.id === id)

        folder.files.splice(copyIndex, 1);

        console.log(folders.map((f) => f.files));

    
}

function removeFolder(id) {
    const folder = folders.findIndex((f) => f.id === id)

    if (folder !== -1) {
        folders.splice(folder, 1);

        console.log(folders.map((f) => f.files));

    } 
}

function parentFolderOf(id) {
    //find parent folder
    const parentFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

    //return parentfolder id
    return parentFolder ? console.log(parentFolder.id) : console.log("File not found");
}


move(17,6) // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(21) // dosyayı silecek
removeFolder(7) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5


