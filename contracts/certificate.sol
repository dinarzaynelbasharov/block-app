// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

// Объявляем смарт-контракт
contract Certificate {
    // Объявляем переменную для хранения владельца контракта
    address public owner;

    // Структура для хранения информации о сертификате
    struct CertificateData {
        uint id;
        string name;
        string course;
        address student;
    }

    // Массив для хранения сертификатов
    CertificateData[] public certificates;

    // Событие, которое будет вызываться при создании нового сертификата
    event CertificateCreated(uint id, string name, string course, address student);

    // Конструктор, который устанавливает владельца контракта
    constructor() {
        owner = msg.sender;
    }

    // Функция для создания нового сертификата
    function createCertificate(string memory _name, string memory _course) public {
        // Увеличиваем ID на 1 для каждого нового сертификата
        uint certificateID = certificates.length + 1;

        // Создаём новый сертификат и добавляем его в массив
        certificates.push(CertificateData(certificateID, _name, _course, msg.sender));

        // Вызываем событие о создании нового сертификата
        emit CertificateCreated(certificateID, _name, _course, msg.sender);
    }

    // Функция для получения информации о сертификате по ID
    function getCertificate(uint _id) public view returns (CertificateData memory) {
        require(_id > 0 && _id <= certificates.length, "Certificate does not exist.");
        return certificates[_id - 1];
    }
}